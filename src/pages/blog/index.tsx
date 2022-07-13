import { Meta } from '../../components/Meta/Meta';
import { Footer } from '../../components/Footer/Footer';
import { Blog } from '../../components/Blog/Blog';
import { fetchBlogPosts, Post } from '../../lib/blog';
import { BUILD_TS } from '../../../app.config';

interface BlogIndexPageProps {
  posts: Post[];
  datePublished: string;
  dateModified: string;
}

export async function getStaticProps() {
  const posts = await fetchBlogPosts();

  return {
    props: {
      posts,
      datePublished: BUILD_TS.toISOString(),
      dateModified: BUILD_TS.toISOString(),
    },
  };
}

const title = "Chad $yntax's Blog of infinite Wonders";
const description =
  'The blog posts of a sweaty software engineer. Disclaimer: Wonders not guaranteed nor guranteed to be infinite.';

export default function BlogIndexPage(props: BlogIndexPageProps) {
  const { posts, datePublished, dateModified } = props;
  return (
    <main>
      <Meta
        title={title}
        description={description}
        type="Blog"
        datePublished={datePublished}
        dateModified={dateModified}
      />
      <Blog posts={posts} />
      <Footer />
    </main>
  );
}
