import { MDXRemote } from 'next-mdx-remote';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { Post } from '../../lib/blog';

interface BlogPostProps {
  post: Post;
}

const components = {
  Test: () => <>test Component</>,
};

export const BlogPost = (props: BlogPostProps) => {
  const { post } = props;
  return (
    <section>
      <BreadCrumbs />
      <h1>{post.data.title}</h1>
      <h2>{post.data.description}</h2>
      <MDXRemote {...post.mdxSource} components={components} />
    </section>
  );
};
