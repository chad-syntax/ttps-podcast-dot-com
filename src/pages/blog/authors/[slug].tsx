import { Meta } from '../../../components/Meta/Meta';
import { Author } from '../../../components/Author/Author';
import { BUILD_TS } from '../../../../app.config';
import {
  fetchAuthor,
  fetchAuthors,
  fetchPostsByAuthor,
  Author as IAuthor,
  Post,
} from '../../../lib/blog';

interface AuthorPageProps {
  author: IAuthor;
  posts: Post[];
  datePublished: string;
  dateModified: string;
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
  const [author, posts] = await Promise.all([
    fetchAuthor(slug),
    fetchPostsByAuthor(slug),
  ]);
  const datePublished = BUILD_TS.toISOString();
  const dateModified = BUILD_TS.toISOString();
  return {
    props: {
      author,
      posts,
      datePublished,
      dateModified,
    },
  };
}

export default function AuthorPage(props: AuthorPageProps) {
  const { author, posts, datePublished, dateModified } = props;
  const title = `The works of ${author.name} at the Chad $yntax Blog of Infinite Wonders`;
  const description = `${author.name}, a.k.a. ${author.title}: ${author.shortbio}`;
  return (
    <>
      <Meta
        title={title}
        description={description}
        type="ProfilePage"
        datePublished={datePublished}
        dateModified={dateModified}
      />
      <Author author={author} posts={posts} />
    </>
  );
}
