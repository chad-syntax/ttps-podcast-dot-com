import { MDXRemote } from 'next-mdx-remote';
import { ReactNode } from 'react';
import { MdxSource } from '../../lib/blog';
import slugify from '../../utils/slugify';
import { CopyTag } from '../CopyTag/CopyTag';
import { MdxWrapper } from './Mdx.styled';

interface MdxProps extends MdxSource {
  components?: {
    [key: string]: ReactNode;
  };
}

const commonMdxComponents = {
  Test: () => <>test Component</>,
  h1: ({ children }) => (
    <h1 id={slugify(children)}>
      {children}
      <CopyTag hash={`#${slugify(children)}`} />
    </h1>
  ),
  h2: ({ children }) => (
    <h2 id={slugify(children)}>
      {children}
      <CopyTag hash={`#${slugify(children)}`} />
    </h2>
  ),
  h3: ({ children }) => (
    <h3 id={slugify(children)}>
      {children}
      <CopyTag hash={`#${slugify(children)}`} />
    </h3>
  ),
};

export const Mdx = (props: MdxProps) => {
  const { mdxSource, components: componentsInput } = props;
  const components = {
    ...commonMdxComponents,
    ...(componentsInput ?? {}),
  };
  return (
    <MdxWrapper>
      <MDXRemote {...mdxSource} components={components} />
    </MdxWrapper>
  );
};
