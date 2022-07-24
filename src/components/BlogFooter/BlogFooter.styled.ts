import styled from 'styled-components';

export const StyledBlogFooter = styled.footer`
  font-family: ${(p) => p.theme.ffJetbrainsMono};
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding: 0 1.6rem 3.2rem;
  @media screen and (min-width: 700px) {
    padding: 0 0 3.2rem;
  }
`;

export const BlogLegalise = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: justify;
`;
