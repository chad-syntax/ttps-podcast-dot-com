import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledHeader, NavLink } from './Header.styled';

const headerLinks = [
  { title: 'Subscribe', href: '/#subscribe' },
  { title: 'Episodes', href: '/#episodes' },
  { title: 'Contact', href: '/#contact' },
];

export const Header = () => {
  const { route } = useRouter();
  const isHome = route === '/';

  const handleClick = (e, href) => {
    // only smooth scroll on home page, otherwise page transitions look wonk
    if (isHome) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledHeader>
      <nav>
        {headerLinks.map((headerLink) => (
          <Link key={headerLink.href} href={headerLink.href}>
            <NavLink onClick={(e) => handleClick(e, headerLink.href)}>
              {headerLink.title}
            </NavLink>
          </Link>
        ))}
      </nav>
    </StyledHeader>
  );
};
