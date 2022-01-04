export const RSS_FEED_URL = process.env.RSS_FEED_URL || '';
export const COMING_SOON_ENABLED = process.env.COMING_SOON_ENABLED === 'true';
export const BUILD_TS = process.env.BUILD_TS
  ? new Date(Number(process.env.BUILD_TS) * 1000)
  : new Date();
export const DECENTRALIZED = process.env.DECENTRALIZED === 'true';
