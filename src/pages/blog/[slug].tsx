import { BUILD_TS } from '../../../app.config';
import {
  fetchBlogPosts,
  fetchBlogPost,
  Post,
  fetchAuthor,
  Author,
} from '../../lib/blog';
import { Meta } from '../../components/Meta/Meta';
import { BlogPost } from '../../components/BlogPost/BlogPost';
import { BlogFooter } from '../../components/BlogFooter/BlogFooter';

interface BlogPostPageProps {
  post: Post;
  author: Author;
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
  const author = await fetchAuthor(post.data.author);
  const dateModified = BUILD_TS.toISOString();
  return {
    props: {
      post,
      author,
      dateModified,
    },
  };
}

export default function BlogPostPage(props: BlogPostPageProps) {
  const { post, author, dateModified } = props;
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
      <BlogPost post={post} author={author} />
      <BlogFooter />
    </main>
  );
}
