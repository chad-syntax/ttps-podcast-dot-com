import Link from 'next/link';
import { useState } from 'react';
import { Hero } from '../Hero/Hero';
import { PodcastLinks } from '../PodcastLinks/PodcastLinks';
import {
  StyledEpisodes,
  EpisodesInner,
  Episode,
  LoadMoreButton,
  LoadAllButton,
  EpisodesFooter,
} from './Episodes.styled';

const cursorTitleMap = {
  '10': 'ten',
  '20': 'twenty',
  '40': 'forty',
  '80': 'eighty',
};

interface EpisodesProps {
  episodes: Episode[];
  comingSoonEnabled: boolean;
  decentralized?: boolean;
}

export const Episodes = (props: EpisodesProps) => {
  const { episodes, comingSoonEnabled, decentralized } = props;
  const [cursorLength, setCursorLength] = useState(10);
  const [cursor, setCursor] = useState(cursorLength);
  const [timesClicked, setTimesClicked] = useState(0);
  const [currentEpisodes, setCurrentEpisodes] = useState(
    episodes.slice(0, cursor)
  );

  const handleLoadMore = () => {
    setTimesClicked((c) => c + 1);
    const nextCursor = cursor + cursorLength;
    const newEpisodes = episodes.slice(0, nextCursor);
    setCursor(nextCursor);
    setCurrentEpisodes(newEpisodes);
    if (timesClicked % 3 === 0) {
      setCursorLength((c) => c * 2);
    }
  };

  const handleLoadAll = () => {
    setCurrentEpisodes(episodes);
  };

  const allLoaded = episodes.length === currentEpisodes.length;

  if (comingSoonEnabled)
    return (
      <StyledEpisodes id="episodes">
        <EpisodesInner>
          <h2 className="coming-soon">Coming at some point in 2022</h2>
        </EpisodesInner>
      </StyledEpisodes>
    );

  return (
    <>
      <Hero
        decentralized={decentralized}
        comingSoonEnabled={comingSoonEnabled}
      />
      <PodcastLinks />
      <StyledEpisodes id="episodes">
        <EpisodesInner>
          <h2>Episodes</h2>
          <br />
          {currentEpisodes.map((episode) => (
            <Episode key={episode.title}>
              <Link href={`/episodes/${episode.slug}`}>
                <a href={`/episodes/${episode.slug}`}>{episode.title}</a>
              </Link>
            </Episode>
          ))}
          {!allLoaded && episodes.length > 10 && (
            <LoadMoreButton onClick={handleLoadMore}>
              load {cursorTitleMap[cursorLength] ?? cursorLength} more
            </LoadMoreButton>
          )}
          <EpisodesFooter>
            <span>
              viewing {currentEpisodes.length} / {episodes.length} episodes
            </span>
            {!allLoaded && (
              <LoadAllButton onClick={handleLoadAll}>load all</LoadAllButton>
            )}
          </EpisodesFooter>
        </EpisodesInner>
      </StyledEpisodes>
    </>
  );
};
