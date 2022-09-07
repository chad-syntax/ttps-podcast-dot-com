import styled from 'styled-components';

export const StyledBlog = styled.section`
  background-color: ${(p) => p.theme.background};
  font-family: ${(p) => p.theme.ffJetbrainsMono};
  padding: 0 1.6rem;
  @media screen and (min-width: 500px) {
    padding: 0 2.4rem;
  }
`;

export const Hero = styled.div`
  h1,
  h2,
  h3,
  h5 {
    margin: 0;
  }

  h1 {
    text-indent: -999999px;
    font-size: 0.2rem;
    padding-bottom: 0.8rem;
    img {
      display: block;
      width: 100%;
    }
  }

  h2 {
    font-size: 1.6rem;
    @media screen and (min-width: 500px) {
      font-size: 2.4rem;
    }
  }

  h2,
  h3 {
    text-align: center;
    font-weight: 400;
  }
  h3 {
    font-size: 1.2rem;
    padding: 1.6rem 0 3.2rem;
  }
`;

export const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 1.6rem 0;
`;

export const ArticleLink = styled.a`
  text-decoration: unset;
`;

export const Article = styled.article`
  h3,
  h5 {
    font-weight: 400;
  }
  h3 {
    margin: 0;
    font-size: 3.2rem;
    font-style: italic;
    text-transform: UPPERCASE;
    color: white;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  h5 {
    margin: 0;
  }
  border: 1px solid white;
  margin-bottom: 1.6rem;
  padding: 0.8rem;
`;
