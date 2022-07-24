import Link from 'next/link';
import { Author } from '../../lib/blog';
import { Inner, AuthorsList } from './Authors.styled';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';

interface AuthorsProps {
  authors: Author[];
}

export const Authors = (props: AuthorsProps) => {
  const { authors } = props;
  return (
    <section>
      <Inner>
        <BreadCrumbs />
        <h1>Authors</h1>
        <h2>Can't live with 'em, can't live without 'em</h2>
        <AuthorsList>
          {authors.map((author) => (
            <p key={author.slug}>
              <Link href={`/blog/authors/${author.slug}`}>{author.name}</Link>
            </p>
          ))}
        </AuthorsList>
      </Inner>
    </section>
  );
};
