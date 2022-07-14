export const COLLECTIONS = {
  POST: 'POST',
  AUTHORS: 'AUTHORS',
} as const;

export const COLLECTIONS_DATA = {
  [COLLECTIONS.POST]: { name: 'post', format: 'mdx' },
  [COLLECTIONS.AUTHORS]: { name: 'authors', format: 'json' },
} as const;

export type Collections = keyof typeof COLLECTIONS;
