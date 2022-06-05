export const RSS_FEED_URL = process.env.RSS_FEED_URL || '';
export const COMING_SOON_ENABLED = process.env.COMING_SOON_ENABLED === 'true';
export const DECENTRALIZED = process.env.DECENTRALIZED === 'true';
export const BUILD_TS = process.env.BUILD_TS
  ? new Date(Number(process.env.BUILD_TS) * 1000)
  : new Date();

if (!COMING_SOON_ENABLED && !RSS_FEED_URL)
  throw new Error(
    `RSS_FEED_URL is required but not present. check your .env file or environment variables`
  );
