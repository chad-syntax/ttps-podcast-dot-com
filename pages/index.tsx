import React from 'react';
import Parser from 'rss-parser';
import { Hero } from '../components/Hero/Hero';
import { Episodes } from '../components/Episodes/Episodes';
import { Footer } from '../components/Footer/Footer';
import { PodcastLinks } from '../components/PodcastLinks/PodcastLinks';
import { Meta } from '../components/Meta/Meta';
import slugify from '../utils/slugify';
import {
  COMING_SOON_ENABLED as comingSoonEnabled,
  RSS_FEED_URL,
  BUILD_TS,
  DECENTRALIZED,
} from '../app.config';

const parser = new Parser();

interface HomeProps {
  episodes: Episode[];
  comingSoonEnabled: boolean;
  dateModified: string;
  datePublished: string;
  decentralized: boolean;
}

export async function getStaticProps() {
  const sharedProps = {
    datePublished: BUILD_TS.toISOString(),
    dateModified: BUILD_TS.toISOString(),
    decentralized: DECENTRALIZED,
  };

  if (comingSoonEnabled)
    return {
      props: {
        episodes: [],
        comingSoonEnabled,
        ...sharedProps,
      },
    };

  const feed = await parser.parseURL(RSS_FEED_URL);
  const episodes = feed.items.map((item) => ({
    url: item.enclosure.url,
    title: item.title,
    slug: slugify(item.title),
  }));

  return {
    props: { episodes: episodes, ...sharedProps },
  };
}

const title = 'Talking Tech while Poking Smot - A Tech Podcast by Chad $yntax';
const launchDescription =
  'Listen to the latest episodes of the TTPS podcast, a show about tech, software engineering, and learning. Anyone is free to ask questions, no matter how simple they may seem. Also pot.';

const comingSoonDescription =
  'Coming at some point in 2022: a podcast about tech, software engineering, and learning. Anyone is free to ask questions, no matter how simple they may seem. Also pot.';

export default function Home(props: HomeProps) {
  const {
    episodes,
    comingSoonEnabled,
    datePublished,
    dateModified,
    decentralized,
  } = props;

  const description = comingSoonEnabled
    ? comingSoonDescription
    : launchDescription;
  return (
    <main>
      <Meta
        title={title}
        decentralized={decentralized}
        description={description}
        datePublished={datePublished}
        dateModified={dateModified}
        type="AboutPage"
      />
      <Hero
        decentralized={decentralized}
        comingSoonEnabled={comingSoonEnabled}
      />
      <PodcastLinks />
      <Episodes episodes={episodes} comingSoonEnabled={comingSoonEnabled} />
      <Footer />
    </main>
  );
}
