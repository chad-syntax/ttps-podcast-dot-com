import Link from 'next/link';
import { fetchAuthors, Author } from '../../../lib/blog';

interface AuthorsIndexPageProps {
  authors: Author[];
}

export async function getStaticProps() {
  const authors = await fetchAuthors();

  return {
    props: {
      authors,
    },
  };
}

export default function AuthorsIndexPage(props: AuthorsIndexPageProps) {
  return (
    <>
      {props.authors.map((author) => (
        <div>
          <Link href={`/blog/authors/${author.slug}`}>{author.name}</Link>
        </div>
      ))}
    </>
  );
}
