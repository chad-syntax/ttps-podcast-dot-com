import styled from 'styled-components';

export const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 1.6rem 0;
`;

export const BlogPostTitle = styled.h1`
  font-size: 4.8rem;
  font-style: italic;
  text-transform: UPPERCASE;
  color: white;
  margin-bottom: 1.2rem;
`;

export const BlogPostSubTitle = styled.h2`
  margin-top: 0;
  font-weight: 400;
`;

export const BlogPostByline = styled.p`
  margin: 0;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${(p) => p.theme.offWhite};
  font-size: 1.2rem;
  a {
    color: white;
  }
`;

export const BlogPostBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
`;
