import styled from 'styled-components';

export const StyledBlog = styled.section`
  background-color: ${(p) => p.theme.background};
  a {
    color: white;
    text-decoration: unset;
  }
`;

export const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 1.6rem; ;
`;

export const Article = styled.article`
  h3,
  h5 {
    font-weight: 400;
    margin: 0;
  }
  border: 1px solid white;
  margin-bottom: 1.6rem;
  padding: 0.8rem;
`;
