import Link from 'next/link';
import { StyledBlogFooter } from './BlogFooter.styled';

export const BlogFooter = () => (
  <StyledBlogFooter>
    <Link href="/blog">
      <a>All Blog Posts</a>
    </Link>
    {' | '}
    <Link href="/blog/authors">
      <a>Authors</a>
    </Link>
    {' | '}
    <Link href="/">
      <a>Podcast</a>
    </Link>
    <br />
    <br />
    <a href="mailto:query@ttpspodcast.com?subject=from%20ttpspodcast%20dot%20com">
      Send feedback/questions to query@ttpspodcast.com
    </a>
  </StyledBlogFooter>
);
