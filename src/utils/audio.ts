import { audioPlayerId } from './constants';

export const getAudio = () =>
  document.getElementById(audioPlayerId) as HTMLAudioElement;
export const play = () => getAudio().play();
export const pause = () => getAudio().pause();
export const setSrc = (src: string) => {
  getAudio().src = src;
};
