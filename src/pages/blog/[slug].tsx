import { BUILD_TS } from '../../../app.config';
import { fetchBlogPosts, fetchBlogPost, Post } from '../../lib/blog';
import { Meta } from '../../components/Meta/Meta';
import { Footer } from '../../components/Footer/Footer';
import { BlogPost } from '../../components/BlogPost/BlogPost';

interface BlogPostPageProps {
  post: Post;
  dateModified: string;
}

export async function getStaticPaths() {
  const posts = await fetchBlogPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await fetchBlogPost(slug);
  const dateModified = BUILD_TS.toISOString();
  return {
    props: {
      post,
      dateModified,
    },
  };
}

export default function BlogPostPage(props: BlogPostPageProps) {
  const { post, dateModified } = props;
  const { title, description, date } = post.data;
  return (
    <main>
      <Meta
        title={title}
        description={description}
        type="BlogPosting"
        datePublished={date}
        dateModified={dateModified}
      />
      <BlogPost post={post} />
      <Footer />
    </main>
  );
}
