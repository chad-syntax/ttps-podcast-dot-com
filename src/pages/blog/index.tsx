import { MDXRemote } from 'next-mdx-remote';
import { Footer } from '../../components/Footer/Footer';
import { fetchBlogPosts } from '../../lib/blog';

const Test = () => (
  <h1>
    <em>I AM TEST</em>
  </h1>
);

const MDXComponents = { Test };

interface BlogIndexPageProps {
  posts: any[];
}

export async function getStaticProps() {
  const posts = await fetchBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndexPage(props: BlogIndexPageProps) {
  const { posts } = props;
  return (
    <main>
      blog index
      <div style={{ color: 'white' }}>
        {posts.map((post) => (
          <div>
            {post.data.title}
            <MDXRemote
              key={post.data.tile}
              {...post.mdxSource}
              components={MDXComponents}
            />
          </div>
        ))}
      </div>
      {/* <Meta
        title={title}
        decentralized={decentralized}
        description={description}
        datePublished={datePublished}
        dateModified={dateModified}
        type="AboutPage"
      /> */}
      {/* {!comingSoonEnabled && <Header />} */}
      {/* <Hero
        decentralized={decentralized}
        comingSoonEnabled={comingSoonEnabled}
      />
      <PodcastLinks /> */}
      {/* <Episodes episodes={episodes} comingSoonEnabled={comingSoonEnabled} /> */}
      <Footer />
    </main>
  );
}
