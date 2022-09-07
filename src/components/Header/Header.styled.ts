import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1.6rem;
  background-color: ${(p) => p.theme.background};
  z-index: 1;
  nav {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavLink = styled.a`
  font-family: ${(p) => p.theme.ffUbuntu};
  font-size: 3.2rem;
  text-decoration: none;
  color: white;
  position: relative;
  cursor: pointer;
  &:hover:after {
    transform: scaleX(1);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
