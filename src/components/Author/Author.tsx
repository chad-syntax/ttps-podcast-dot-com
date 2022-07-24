import Link from 'next/link';
import { Author as IAuthor, Post } from '../../lib/blog';
import { blogAssetRoot } from '../../utils/constants';
import { Avatar, Inner } from './Author.styled';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';

interface AuthorProps {
  author: IAuthor;
  posts: Post[];
}

export const Author = (props: AuthorProps) => {
  const { author, posts } = props;
  return (
    <section>
      <Inner>
        <BreadCrumbs />
        <Avatar>
          <img
            alt={`${author.name}'s profile picture`}
            src={`${blogAssetRoot}${author.authorimage}`}
          />
          <div>
            <h1>{author.name}</h1>
            <h2>
              {'a.k.a '}
              {author.title}
            </h2>
          </div>
        </Avatar>
        <p>{author.shortbio}</p>
        <h3>Posts by this author</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>
            </li>
          ))}
        </ul>
      </Inner>
    </section>
  );
};
