import styled from 'styled-components';

export const StyledAudioPlayer = styled.div<{ $active: boolean }>`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${(p) => p.theme.background};
  border-top: 2px solid ${(p) => p.theme.offWhite};
  transition: transform 0.3s ease;
  transform: translateY(${(p) => (p.$active ? '0%' : '100%')});
  audio {
    width: 100%;
  }
`;

export const PlayerInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.6rem;
  @media screen and (max-width: 768px) {
    padding: 0.8rem;
  }
`;

export const Close = styled.button`
  color: white;
  background-color: ${(p) => p.theme.background};
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;

// TODO make it marquee
export const EpisodeTitle = styled.h4`
  color: white;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;
