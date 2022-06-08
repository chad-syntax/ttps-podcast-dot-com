import Link from 'next/link';
import { StyledHeader, NavLink } from './Header.styled';

export const Header = () => (
  <StyledHeader>
    <nav>
      <Link href="/#subscribe">
        <NavLink>Subscribe</NavLink>
      </Link>
      <Link href="/#episodes">
        <NavLink>Episodes</NavLink>
      </Link>
      <Link href="/#contact">
        <NavLink>Contact</NavLink>
      </Link>
    </nav>
  </StyledHeader>
);
