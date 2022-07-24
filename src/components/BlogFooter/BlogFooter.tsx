import Link from 'next/link';
import { StyledBlogFooter, BlogLegalise } from './BlogFooter.styled';

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
    <br />
    <BlogLegalise>
      *Any and all wonders found on the property are exclusively owned by "Chad
      $yntax Blog Cave of Wonders! LLC" in perpetuity. By entering the blog cave
      you waive all rights to any wonders found within the cave and recognize
      the authority of "Chad $yntax Blog Cave of Wonders! LLC" staff on any
      company property. By entering the cave you waive your right to bear arms
      and must strictly adhere to company policy. Failure to comply may result
      in incarceration and/or expulsion from the Blog Cave of Wonders. By
      entering the cave you waive all rights to bring suit against "Chad $yntax
      Blog Cave of Wonders! LLC" and it's subsidiaries. "Chad $yntax Blog Cave
      of Wonders! LLC" reserves the right to restrain any personnel found
      exiting the premisis with wonders concealed or purposefully hidden from
      staff.
      <br />
      <br />
      "Chad $yntax Blog Cave of Wonders! LLC" also holds exclusive rights to
      what are colloquially known as "Sub-Wonders", "Sub-Sub-Wonders",
      "Mini-Wonders", "Micro Wonders", and "Chonk Wonders" found within the Blog
      Cave. "Chad $yntax Blog Cave of Wonders! LLC" also owns the rights to any
      "Wonder" subgroups, archetypes, or categories discovered in the future.
      <br />
      <br />
      Outside food and drink are not allowed within the blog cave.
    </BlogLegalise>
  </StyledBlogFooter>
);
