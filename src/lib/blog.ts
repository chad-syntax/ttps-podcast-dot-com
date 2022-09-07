import { processJsonGitFile, processMdxGitFile, fetchFromGit } from './git';
import { COLLECTIONS } from './collections';

export type Post = Awaited<ReturnType<typeof processMdxGitFile>>;
export type MdxSource = Pick<Post, 'mdxSource'>;

const postSort = (a, b) => {
  if (a.data.date === b.data.date) return 0;
  const aDate = new Date(a.data.date);
  const bDate = new Date(b.data.date);

  return aDate > bDate ? -1 : 1;
};

export const fetchBlogPosts = async (): Promise<Post[]> => {
  const data = await fetchFromGit(COLLECTIONS.POST);

  if (!data.repository.object) return [];

  const posts = await Promise.all<Post[]>(
    data.repository.object.entries.map(processMdxGitFile)
  );

  // files aren't sorted in the github repo, sort by pub date
  posts.sort(postSort);

  return posts;
};

export const fetchBlogPost = async (slug: string): Promise<Post> => {
  const data = await fetchFromGit(COLLECTIONS.POST, slug);

  const post = await processMdxGitFile({ ...data.repository, name: slug });

  return post;
};

export type Author = {
  slug: string;
  name: string;
  title: string;
  email: string;
  shortbio: string;
  authorimage: string;
};

export const fetchAuthors = async (): Promise<Author[]> => {
  const data = await fetchFromGit(COLLECTIONS.AUTHORS);

  const authors = data.repository.object.entries.map(processJsonGitFile);

  return authors;
};

export const fetchAuthor = async (slug: string): Promise<Author> => {
  const data = await fetchFromGit(COLLECTIONS.AUTHORS, slug);

  const author = processJsonGitFile({ ...data.repository, name: slug });

  return author;
};

export const fetchPostsByAuthor = async (slug: string): Promise<Post[]> => {
  const data = await fetchFromGit(COLLECTIONS.POST);

  if (!data.repository.object) return [];

  const posts = await Promise.all<Post[]>(
    data.repository.object.entries.map(processMdxGitFile)
  );

  const postsByAuthor = posts.filter((post) => post.data.author === slug);

  console.log('postsByAuthor', postsByAuthor);

  // files aren't sorted in the github repo, sort by pub date
  postsByAuthor.sort(postSort);

  return postsByAuthor;
};
