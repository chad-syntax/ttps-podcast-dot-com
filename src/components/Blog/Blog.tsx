import Link from 'next/link';
import { Post } from '../../lib/blog';
import { StyledBlog, Inner, Article } from './Blog.styled';

interface BlogProps {
  posts: Post[];
}

export const Blog = (props: BlogProps) => {
  const { posts } = props;
  return (
    <StyledBlog>
      <Inner>
        <h1>Chad $yntax's Blog of infinite Wonders!</h1>
        <h2>
          A Blog of posts. Posts about software engineering, web development,
          and whatever else.
        </h2>
        <p>Disclaimer: Wonders non-transferrable, see terms and conditions.</p>
        <div>
          {posts.map((post) => {
            const { title, author } = post.data;
            return (
              <Link key={title} href={`/blog/${post.slug}`} passHref>
                <a>
                  <Article>
                    <h3>{post.data.title}</h3>
                    <h5>By {author}</h5>
                    <p>{post.data.description}</p>
                  </Article>
                </a>
              </Link>
            );
          })}
        </div>
      </Inner>
    </StyledBlog>
  );
};
