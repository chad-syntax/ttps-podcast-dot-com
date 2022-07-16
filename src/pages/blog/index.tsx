import { Meta } from '../../components/Meta/Meta';
import { BlogFooter } from '../../components/BlogFooter/BlogFooter';
import { Blog } from '../../components/Blog/Blog';
import { fetchBlogPosts, Post, fetchAuthors, Author } from '../../lib/blog';
import { BUILD_TS } from '../../../app.config';

interface BlogIndexPageProps {
  posts: Post[];
  authors: Author[];
  datePublished: string;
  dateModified: string;
}

export async function getStaticProps() {
  const [posts, authors] = await Promise.all([
    fetchBlogPosts(),
    fetchAuthors(),
  ]);

  return {
    props: {
      posts,
      authors,
      datePublished: BUILD_TS.toISOString(),
      dateModified: BUILD_TS.toISOString(),
    },
  };
}

const title = "Chad $yntax's Blog of infinite Wonders";
const description =
  'The blog posts of a sweaty software engineer. Disclaimer: Wonders not guaranteed nor guranteed to be infinite.';

export default function BlogIndexPage(props: BlogIndexPageProps) {
  const { posts, authors, datePublished, dateModified } = props;
  return (
    <main>
      <Meta
        title={title}
        description={description}
        type="Blog"
        datePublished={datePublished}
        dateModified={dateModified}
      />
      <Blog posts={posts} authors={authors} />
      <BlogFooter />
    </main>
  );
}
