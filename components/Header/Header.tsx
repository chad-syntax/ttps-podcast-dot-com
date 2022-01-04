import Link from 'next/Link';
import { StyledHeader, NavLink } from './Header.styled';

export const Header = () => (
  <StyledHeader>
    <nav>
      <Link href="/#listen">
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
