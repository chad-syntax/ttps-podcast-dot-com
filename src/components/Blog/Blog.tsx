import Link from 'next/link';
import { Post, Author } from '../../lib/blog';
import { StyledBlog, Inner, Article, ArticleLink } from './Blog.styled';
import { Hero } from './Blog.styled';
import caveImgPng from './hero-images/chad-syntax-blog-cave.png';
import caveImgPng2x from './hero-images/chad-syntax-blog-cave@2x.png';
import caveImgWebp from './hero-images/chad-syntax-blog-cave.webp';
import caveImgWebp2x from './hero-images/chad-syntax-blog-cave@2x.png';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { useMemo } from 'react';

interface BlogProps {
  posts: Post[];
  authors: Author[];
}

const maxDescCharCount = 275;

export const Blog = (props: BlogProps) => {
  const { posts, authors } = props;

  const authorsMap = useMemo(() => {
    const map = new Map();
    for (const author of authors) {
      map.set(author.slug, author);
    }
    return map;
  }, [authors]);

  return (
    <StyledBlog>
      <Inner>
        <BreadCrumbs />
        <Hero>
          <h1>
            Chad $yntax's Blog of infinite Wonders!
            <picture>
              <source
                srcSet={`${caveImgPng.src}, ${caveImgPng2x.src} 2x`}
                type="image/png"
              />
              <source
                srcSet={`${caveImgWebp.src}, ${caveImgWebp2x.src} 2x`}
                type="image/webp"
              />
              <img
                src={caveImgWebp.src}
                alt="Chad $yntax's Blog of infinite Wonders Logo!"
              />
            </picture>
          </h1>
          <h2>
            A Blog of posts. Posts about software engineering, web development,
            and whatever else.
          </h2>
          <h3>
            *Disclaimer: Wonders non-transferrable, see fine print for details.
          </h3>
        </Hero>
        {posts.length === 0 && <p>The cave is... empty? Wtf.</p>}
        <div>
          {posts.map((post) => {
            const { title, author } = post.data;
            const targetAuthor = authorsMap.get(author);
            let description = post.data.description ?? '';
            if (description.length > maxDescCharCount) {
              description = `${description
                .slice(0, maxDescCharCount)
                .trim()}...`;
            }
            return (
              <Link key={title} href={`/blog/${post.slug}`} passHref>
                <ArticleLink>
                  <Article>
                    <h3>{post.data.title}</h3>
                    <h5>
                      By&nbsp;
                      <Link href={`/blog/authors/${targetAuthor.slug}`}>
                        <a>{targetAuthor.name}</a>
                      </Link>
                    </h5>
                    <p>{description}</p>
                  </Article>
                </ArticleLink>
              </Link>
            );
          })}
        </div>
      </Inner>
    </StyledBlog>
  );
};
