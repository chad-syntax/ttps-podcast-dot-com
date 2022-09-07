import React from 'react';

interface AudioPlayerCtx {
  title: string | null;
  setTitle: (src: string) => void;
}

export const AudioPlayerCtx = React.createContext<AudioPlayerCtx>({
  title: null,
  setTitle: () => {},
});
