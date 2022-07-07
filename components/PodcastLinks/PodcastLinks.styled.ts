import styled from 'styled-components';

export const StyledPodcastLinks = styled.section`
  background-color: ${(p) => p.theme.background};
  h2 {
    text-align: center;
    color: ${(p) => p.theme.offWhite};
  }
`;

export const PodcastLinksInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyledPodcastLink = styled.a`
  text-indent: -9999999px;
  img {
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  &:last-of-type img {
    margin-right: 0;
  }
`;
