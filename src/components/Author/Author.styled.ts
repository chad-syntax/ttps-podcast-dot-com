import styled from 'styled-components';

export const Avatar = styled.div`
  padding: 1.6rem;
  border: 1px solid white;
  display: flex;
  align-items: center;
  img {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    margin-right: 1.6rem;
    border: 1px solid white;
  }
  h1,
  h2 {
    margin: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export const Inner = styled.div`
  max-width: 500px;
  min-height: 500px;
  margin: auto;
  padding: 2rem 1.6rem 0;

  @media scree and (min-width: 500px) {
    padding: 2rem 0 0;
  }

  h3 {
    padding-top: 1.6rem;
    margin-bottom: 0.8rem;
  }
  ul {
    padding-left: 1.8rem;
    margin-top: 0;
  }
`;
