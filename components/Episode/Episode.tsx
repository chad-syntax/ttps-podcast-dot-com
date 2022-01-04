import { useContext } from 'react';
import { AudioPlayerCtx } from '../AudioPlayer/AudioPlayerCtx';
import { StyledSection, EpisodeInner, PlayButton } from './Episode.styled';
import { setSrc, play } from '../../utils/audio';

interface EpisodeProps {
  title: string;
  content: string;
  url: string;
}

export const Episode = (props: EpisodeProps) => {
  const { title, content, url } = props;
  const { setTitle, title: currentAudioTitle } = useContext(AudioPlayerCtx);
  return (
    <StyledSection>
      <EpisodeInner>
        <h1>{title}</h1>
        <PlayButton
          onClick={() => {
            setTitle(title);
            setSrc(url);
            play();
          }}
        >
          {currentAudioTitle === title ? 'Playing' : 'Play Episode'}
        </PlayButton>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </EpisodeInner>
    </StyledSection>
  );
};
