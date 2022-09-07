import styled from 'styled-components';

export const Inner = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1.6rem;
  @media screen and (min-width: 500px) {
    padding: 0;
  }
  h1,
  h2 {
    text-align: center;
    font-weight: 400;
  }
  h1 {
    font-size: 5.2rem;
    margin-bottom: 1.2rem;
  }
  h2 {
    margin-top: 0;
    font-size: 1.8rem;
  }
`;

export const AuthorsList = styled.div`
  min-height: 500px;
`;
