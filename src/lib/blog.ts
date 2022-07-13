import matter from 'gray-matter';
import yaml from 'js-yaml';
import { serialize } from 'next-mdx-remote/serialize';
import {
  BLOG_POSTS_QUERY,
  BLOG_POST_QUERY,
} from '../gql-queries/blog-posts-query';
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
  const body = JSON.stringify({
    query: BLOG_POSTS_QUERY,
    variables: {
      postsPath: `${CONTENT_ROOT}/post/`,
    },
  });

  const { data } = await fetch(BLOG_GRAPHQL_ENDPOINT, {
    ...fetchOpts,
    body,
  }).then((r) => r.json());

  const posts = await Promise.all<Post[]>(
    data.repository.object.entries.map(processGiFileToPost)
  );

  return posts;
};

export const fetchBlogPost = async (slug: string) => {
  const body = JSON.stringify({
    query: BLOG_POST_QUERY,
    variables: {
      postPath: `${CONTENT_ROOT}/post/${slug}.md`,
    },
  });

  const { data } = await fetch(BLOG_GRAPHQL_ENDPOINT, {
    ...fetchOpts,
    body,
  }).then((r) => r.json());

  const post = await processGiFileToPost({ ...data.repository, name: slug });

  return post;
};
