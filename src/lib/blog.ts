import matter from 'gray-matter';
import yaml from 'js-yaml';
import { serialize } from 'next-mdx-remote/serialize';
import { GIT_FILES_QUERY, GIT_FILE_QUERY } from '../gql-queries/git-queries';
import {
  BLOG_GRAPHQL_ENDPOINT,
  BLOG_API_TOKEN,
  BLOG_BRANCH,
} from '../../app.config';

// folder in cms repo where we save all of our content
const CONTENT_ROOT = `${BLOG_BRANCH}:content`;

const fetchOpts = {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${BLOG_API_TOKEN}`,
  },
};

const fetchFromGit = async (reqBody: any) => {
  const body = JSON.stringify(reqBody);

  const response = await fetch(BLOG_GRAPHQL_ENDPOINT, {
    ...fetchOpts,
    body,
  }).then((r) => r.json());

  const { data, message, documentation_url } = response;

  if (!data) {
    throw new Error(`${message} ${documentation_url}. Check BLOG_ env vars.`);
  }

  return data;
};

// turns md file into json data object for further parsing
const parseMdxData = (fileContents: string) =>
  matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

const processGiFileToPost = async (entry: any) => {
  const fileContents = entry.object.text;
  const mdxMetadata = parseMdxData(fileContents);
  const mdxSource = await serialize(mdxMetadata.content);
  const slug = entry.name.replace('.md', '');
  const post = { ...mdxMetadata, mdxSource, slug };
  return post;
};

export type Post = Awaited<ReturnType<typeof processGiFileToPost>>;

export const fetchBlogPosts = async () => {
  const queryObj = {
    query: GIT_FILES_QUERY,
    variables: {
      expression: `${CONTENT_ROOT}/post/`,
    },
  };

  const data = await fetchFromGit(queryObj);

  const posts = await Promise.all<Post[]>(
    data.repository.object.entries.map(processGiFileToPost)
  );

  // files aren't sorted in the github repo, sort by pub date
  posts.sort((a, b) => {
    if (a.data.date === b.data.date) return 0;
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);

    return aDate > bDate ? -1 : 1;
  });

  return posts;
};

export const fetchBlogPost = async (slug: string) => {
  const queryObj = {
    query: GIT_FILE_QUERY,
    variables: {
      expression: `${CONTENT_ROOT}/post/${slug}.md`,
    },
  };

  const data = await fetchFromGit(queryObj);

  const post = await processGiFileToPost({ ...data.repository, name: slug });

  return post;
};

export type Author = {
  slug: string;
  name: string;
  title: string;
  email: string;
  shortbio: string;
  authorimage: string;
};

const processGitFileToAuthor = (entry: any) => {
  const slug = entry.name.replace('.json', '');
  const authorData = JSON.parse(entry.object.text);
  return {
    slug,
    ...authorData,
  };
};

export const fetchAuthors = async () => {
  const queryObj = {
    query: GIT_FILES_QUERY,
    variables: {
      expression: `${CONTENT_ROOT}/authors/`,
    },
  };

  const data = await fetchFromGit(queryObj);

  const authors = data.repository.object.entries.map(processGitFileToAuthor);

  return authors;
};

export const fetchAuthor = async (slug) => {
  const queryObj = {
    query: GIT_FILE_QUERY,
    variables: {
      expression: `${CONTENT_ROOT}/authors/${slug}.json`,
    },
  };

  const data = await fetchFromGit(queryObj);

  const author = processGitFileToAuthor({ ...data.repository, name: slug });

  return author;
};
