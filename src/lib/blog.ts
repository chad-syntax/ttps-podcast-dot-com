import matter from 'gray-matter';
import yaml from 'js-yaml';
import { serialize } from 'next-mdx-remote/serialize';
import { BLOG_POSTS_QUERY } from '../gql-queries/blog-posts-query';
import { BLOG_GRAPHQL_ENDPOINT, BLOG_API_TOKEN } from '../../app.config';

// turns md file into json data object for further parsing
const parseMdxData = (fileContents: string) =>
  matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

export const fetchBlogPosts = async () => {
  const body = JSON.stringify({
    query: BLOG_POSTS_QUERY,
    variables: {},
  });

  const { data } = await fetch(BLOG_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${BLOG_API_TOKEN}`,
    },
    body,
  }).then((r) => r.json());

  const posts = Promise.all(
    data.repository.object.entries.map(async (entry) => {
      const fileContents = entry.object.text;
      const mdxMetadata = parseMdxData(fileContents);

      const mdxSource = await serialize(mdxMetadata.content);

      return { ...mdxMetadata, mdxSource };
    })
  );

  return posts;
};
