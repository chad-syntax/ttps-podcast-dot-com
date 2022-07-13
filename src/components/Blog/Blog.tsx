import Link from 'next/link';
import { Post } from '../../lib/blog';

interface BlogProps {
  posts: Post[];
}

export const Blog = (props: BlogProps) => {
  const { posts } = props;
  return (
    <section>
      <h1>Chad $yntax's Blog of infinite Wonders!</h1>
      <h2>Disclaimer: Wonders non-transferrable, see terms and conditions.</h2>
      <div>
        {posts.map((post) => {
          const { title, author } = post.data;
          return (
            <Link key={title} href={`/blog/${post.slug}`} passHref>
              <a>
                {/* TODO update CMS to provide slug field */}
                <article>
                  <h3>{post.data.title}</h3>
                  <h5>{author}</h5>
                </article>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
