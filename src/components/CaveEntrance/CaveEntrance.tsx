import Link from 'next/link';
import { StyledCaveEntrance, CaveLink } from './CaveEntrance.styled';
import caveEntrancePng from './blog-cave-entrance.png';

export const CaveEntrance = () => (
  <Link href="/blog" passHref>
    <CaveLink>
      <StyledCaveEntrance
        alt="Entrance to the blog cave, where we harvest the blog posts when they are in season"
        src={caveEntrancePng.src}
      />
      <span>Blog</span>
    </CaveLink>
  </Link>
);
