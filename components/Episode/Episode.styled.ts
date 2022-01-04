import styled from 'styled-components';

export const EpisodeInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  background-color: #d0d0d0;
  padding: 2rem 1.2rem;
`;

export const PlayButton = styled.button`
  background-color: ${(p) => p.theme.buttonBg};
  padding: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
`;
