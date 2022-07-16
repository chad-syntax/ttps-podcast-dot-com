import styled from 'styled-components';

export const StyledEpisodes = styled.section`
  background-color: ${(p) => p.theme.background};
  color: white;
  padding-bottom: 2rem;
`;

export const EpisodesInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  h2 {
    font-size: 4.2rem;
    padding: 1.6rem 0;
    margin: 0;
  }
  @media screen and (max-width: 1000px) {
    margin: 0 1.6rem;
  }
  .coming-soon {
    text-align: center;
  }
`;

export const LoadMoreButton = styled.button`
  font-family: ${(p) => p.theme.ffIbmPlex};
  display: block;
  font-weight: 300;
  cursor: pointer;
  margin: 0 auto;
  font-size: 2.4rem;
  padding: 1.6rem 3.2rem;
  background-color: ${(p) => p.theme.buttonBg};
  color: white;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 1000px) {
    padding: 0.8rem 1.6rem;
    font-size: 1.8rem;
  }
`;

export const Episode = styled.div`
  font-family: ${(p) => p.theme.ffIbmPlex};
  font-size: 2.6rem;
  margin-bottom: 1.6rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const LoadAllButton = styled.button`
  font-family: ${(p) => p.theme.ffIbmPlex};
  background: none;
  border: none;
  text-decoration: underline;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const EpisodesFooter = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
