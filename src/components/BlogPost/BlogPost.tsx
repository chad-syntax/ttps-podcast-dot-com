import { MDXRemote } from 'next-mdx-remote';
import { Post } from '../../lib/blog';

interface BlogPostProps {
  post: Post;
}

const components = {
  Test: () => <>hello</>,
};

export const BlogPost = (props: BlogPostProps) => {
  const { post } = props;
  return (
    <section>
      <h1>{post.data.title}</h1>
      <h2>{post.data.description}</h2>
      <MDXRemote {...post.mdxSource} components={components} />
    </section>
  );
};
