import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer';
import { AudioPlayerCtx } from '../components/AudioPlayer/AudioPlayerCtx';
import { kSequence, kAudio, theme, Theme } from '../utils/constants';
import { PodcastLayout } from '../components/Layout/PodcastLayout';
import { BlogLayout } from '../components/Layout/BlogLayout';
import { setSrc, play } from '../utils/audio';

const GlobalStyle = createGlobalStyle<{ theme: Theme; isBlog: boolean }>`
  html {
    font-size: 62.5%;
    background-color: ${(p) => p.theme.background};
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    color: ${(p) => p.theme.offWhite};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -mac-osx-font-smoothing: greyscale;
    box-sizing: border-box;
  }

  a {
    color: white;
    &:visited {
      color: #b0b0b0;
    }
  }
`;

export default function App({ Component, pageProps }) {
  const [audioTitle, setAudioTitle] = useState<null | string>(null);

  const { route } = useRouter();
  const isBlog = route.includes('blog');

  const Layout = isBlog ? BlogLayout : PodcastLayout;

  useEffect(() => {
    let _seq = kSequence;
    let _prog = 0;
    const k = (e: KeyboardEvent) => {
      _prog = e.keyCode === _seq[_prog] ? _prog + 1 : 0;
      if (_prog === _seq.length) {
        setAudioTitle(kAudio);
        setSrc(kAudio);
        play();
      }
    };

    console.log(
      "%cThis website's source code is on github so you don't have to go poking around https://github.com/chad-syntax/ttps-podcast-dot-com",
      `color: purple; font-family:${theme.ffIbmPlex}; font-size: 20px`
    );
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  return (
    <AudioPlayerCtx.Provider
      value={{ title: audioTitle, setTitle: setAudioTitle }}
    >
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle isBlog={isBlog} />
          <Component {...pageProps} />
          <AudioPlayer />
        </Layout>
      </ThemeProvider>
    </AudioPlayerCtx.Provider>
  );
}
