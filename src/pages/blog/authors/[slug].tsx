import { BUILD_TS } from '../../../../app.config';
import { fetchAuthor, fetchAuthors, Author } from '../../../lib/blog';

interface AuthorPageProps {
  author: Author;
}

export async function getStaticPaths() {
  const posts = await fetchAuthors();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const author = await fetchAuthor(slug);
  const dateModified = BUILD_TS.toISOString();
  return {
    props: {
      author,
      dateModified,
    },
  };
}

export default function AuthorPage(props: AuthorPageProps) {
  return <>{props.author.name}</>;
}
