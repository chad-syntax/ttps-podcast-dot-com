import styled from 'styled-components';

export const ExitLink = styled.a<{ isLast?: boolean }>`
  text-decoration: underline;
  position: relative;
  color: white;
`;

export const BreadCrumbsNav = styled.nav`
  line-height: 2.8rem;
  span {
    margin: 0 0.8rem;
  }
  display: flex;
  flex-wrap: wrap;
`;
