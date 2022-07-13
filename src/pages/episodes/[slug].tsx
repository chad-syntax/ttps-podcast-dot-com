import Parser from 'rss-parser';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Episode } from '../../components/Episode/Episode';
import { Meta } from '../../components/Meta/Meta';
import slugify from '../../utils/slugify';
import { COMING_SOON_ENABLED, RSS_FEED_URL } from '../../../app.config';
import { stripScriptTags } from '../../utils/strip-script-tags';

const parser = new Parser();

let _feed;

const getFeed = async () => {
  if (_feed) return _feed;
  _feed = await parser.parseURL(RSS_FEED_URL);
  return _feed;
};

export async function getStaticPaths() {
  if (COMING_SOON_ENABLED)
    return {
      paths: [],
      fallback: false,
    };

  const feed = await getFeed();
  const paths = feed.items.map((item) => ({
    params: { slug: slugify(item.title) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const feed = await getFeed();
  const { slug } = params;

  const targetItem = feed.items.find((item) => slugify(item.title) === slug);

  const anchorVMLink = 'https://anchor.fm/ttps/message';

  const content = stripScriptTags(targetItem['content']).replace(
    anchorVMLink,
    `<a href="${anchorVMLink}" target="_blank" rel="noopener noreferrer">${anchorVMLink}</a>`
  );

  return {
    props: {
      title: targetItem.title,
      content,
      description: targetItem.contentSnippet || '',
      url: targetItem.enclosure.url,
      datePublished: targetItem.isoDate,
      dateModified: targetItem.isoDate,
    },
  };
}

interface EpisodeProps {
  title: string;
  description: string;
  comingSoonEnabled: boolean;
  datePublished: string;
  dateModified: string;
  content: string;
  url: string;
}

export default function EpisodePage(props: EpisodeProps) {
  const { title, description, datePublished, dateModified } = props;

  const trimmedDescription = `${description.substring(0, 147)}...`;

  return (
    <main>
      <Meta
        title={title}
        description={trimmedDescription}
        type="PodcastEpisode"
        datePublished={datePublished}
        dateModified={dateModified}
      />
      <Header />
      <Episode {...props} />
      <Footer />
    </main>
  );
}
