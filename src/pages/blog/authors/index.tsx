import { Meta } from '../../../components/Meta/Meta';
import { Authors } from '../../../components/Authors/Authors';
import { fetchAuthors, Author } from '../../../lib/blog';
import { BUILD_TS } from '../../../../app.config';

interface AuthorsIndexPageProps {
  authors: Author[];
  datePublished: string;
  dateModified: string;
}

const title =
  'All of our esteemed authors here at the Chad $yntax Blog of Infinite wonders.';

const description =
  "Wait, aren't we broke? How are we affording extra writers? Don't we just have the one who we don't even pay? Hello? Is my internet out?";

export async function getStaticProps() {
  const authors = await fetchAuthors();

  return {
    props: {
      authors,
      datePublished: BUILD_TS.toISOString(),
      dateModified: BUILD_TS.toISOString(),
    },
  };
}

export default function AuthorsIndexPage(props: AuthorsIndexPageProps) {
  const { authors, dateModified, datePublished } = props;
  return (
    <>
      <Meta
        title={title}
        description={description}
        type="CollectionPage"
        datePublished={datePublished}
        dateModified={dateModified}
      />
      <Authors authors={authors} />
    </>
  );
}
