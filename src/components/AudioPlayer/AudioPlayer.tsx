import { useContext } from 'react';
import {
  StyledAudioPlayer,
  EpisodeTitle,
  PlayerInner,
  Close,
  TitleWrapper,
} from './AudioPlayer.styled';
import { AudioPlayerCtx } from './AudioPlayerCtx';
import { audioPlayerId, audioPlayerWrapperId } from '../../utils/constants';
import { setSrc } from '../../utils/audio';

export const AudioPlayer = () => {
  const { title, setTitle } = useContext(AudioPlayerCtx);

  const handleClose = () => {
    setSrc('');
    setTitle(null);
  };

  return (
    <StyledAudioPlayer $active={Boolean(title)} id={audioPlayerWrapperId}>
      <PlayerInner>
        <TitleWrapper>
          <EpisodeTitle>{title}</EpisodeTitle>
          <Close onClick={handleClose}>stop please my ears</Close>
        </TitleWrapper>

        <audio controls id={audioPlayerId} />
      </PlayerInner>
    </StyledAudioPlayer>
  );
};
