import styled from 'styled-components';

export const CopyTag = styled.div<{ active: boolean }>`
  position: absolute;
  width: 12rem;
  right: -12.8rem;
  top: 0;
  font-size: 1.2rem;
  line-height: 2.2rem;
  margin-left: 0.8rem;
  opacity: ${(p) => (p.active ? '1' : '0')};
  transition: opacity 0.3s ease;
  color: white;
`;

export const ExitLink = styled.a<{ isLast?: boolean }>`
  text-decoration: underline;
  position: relative;
  &:hover ${CopyTag} {
    opacity: 1;
  }
`;

export const BreadCrumbsNav = styled.nav`
  span {
    margin: 0 0.8rem;
  }
`;
