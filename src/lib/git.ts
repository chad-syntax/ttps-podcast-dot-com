import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import yaml from 'js-yaml';

import { GIT_FILES_QUERY, GIT_FILE_QUERY } from '../gql-queries/git-queries';
import {
  BLOG_GRAPHQL_ENDPOINT,
  BLOG_API_TOKEN,
  BLOG_BRANCH,
} from '../../app.config';
import { Collections, COLLECTIONS_DATA } from './collections';

// turns md file into json data object for further parsing
const parseMdxData = (fileContents: string) =>
  matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

export const processJsonGitFile = (entry: any) => {
  const slug = entry.name.replace('.json', '');
  const jsonFileContent = JSON.parse(entry.object.text);
  return {
    slug,
    ...jsonFileContent,
  };
};

export const processMdxGitFile = async (entry: any) => {
  const fileContents = entry.object.text;
  const mdxMetadata = parseMdxData(fileContents);
  const mdxSource = await serialize(mdxMetadata.content);
  const slug = entry.name.replace('.mdx', '');
  const parsedFileData = { ...mdxMetadata, mdxSource, slug };
  return parsedFileData;
};

// folder in cms repo where we save all of our content
const CONTENT_ROOT = `${BLOG_BRANCH}:content`;

const fetchOpts = {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${BLOG_API_TOKEN}`,
  },
};

export const fetchFromGit = async (
  collection: Collections,
  slug?: string,
  variables: object = {}
) => {
  const isSingle = slug !== undefined;
  const query = isSingle ? GIT_FILE_QUERY : GIT_FILES_QUERY;
  const { name, format } = COLLECTIONS_DATA[collection];
  const fileName = isSingle ? `${slug}.${format}` : '';
  const expression = `${CONTENT_ROOT}/${name}/${fileName}`;

  const queryObj = {
    query,
    variables: {
      expression,
      ...variables,
    },
  };

  const body = JSON.stringify(queryObj);

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
