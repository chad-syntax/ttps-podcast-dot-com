import Link from 'next/link';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import {
  Inner,
  BlogPostTitle,
  BlogPostSubTitle,
  BlogPostByline,
  BlogPostBody,
} from './BlogPost.styled';
import { Post, Author } from '../../lib/blog';
import { Mdx } from '../Mdx/Mdx';

interface BlogPostProps {
  post: Post;
  author: Author;
}

export const BlogPost = (props: BlogPostProps) => {
  const { post, author } = props;

  const {
    data: { date, title, description },
  } = post;

  const dateObj = new Date(date);
  const pubDate = dateObj.toLocaleDateString();
  const pubTime = dateObj.toLocaleTimeString();

  return (
    <section>
      <Inner>
        <BreadCrumbs />
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostSubTitle>{description}</BlogPostSubTitle>
        <BlogPostByline>
          Published {pubDate} {`@ ${pubTime}`} by&nbsp;
          <Link href={`/blog/authors/${author.slug}`}>{author.name}</Link>
        </BlogPostByline>
        <BlogPostBody>
          <Mdx mdxSource={post.mdxSource} />
        </BlogPostBody>
      </Inner>
    </section>
  );
};
