import Link from 'next/link';
import { Post } from '../../lib/blog';
import { StyledBlog, Inner, Article, ArticleLink } from './Blog.styled';
import { Hero } from './Blog.styled';
import caveImgPng from './hero-images/chad-syntax-blog-cave.png';
import caveImgPng2x from './hero-images/chad-syntax-blog-cave@2x.png';
import caveImgWebp from './hero-images/chad-syntax-blog-cave.webp';
import caveImgWebp2x from './hero-images/chad-syntax-blog-cave@2x.png';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';

interface BlogProps {
  posts: Post[];
}

export const Blog = (props: BlogProps) => {
  const { posts } = props;
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
        <div>
          {posts.map((post) => {
            const { title, author } = post.data;
            return (
              <Link key={title} href={`/blog/${post.slug}`} passHref>
                <ArticleLink>
                  <Article>
                    <h3>{post.data.title}</h3>
                    <h5>By {author}</h5>
                    <p>{post.data.description}</p>
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
