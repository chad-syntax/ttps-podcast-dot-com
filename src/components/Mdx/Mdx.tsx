import { MDXRemote } from 'next-mdx-remote';
import { ReactNode } from 'react';
import { MdxSource } from '../../lib/blog';

interface MdxProps extends MdxSource {
  components?: {
    [key: string]: ReactNode;
  };
}

const commonMdxComponents = {
  Test: () => <>test Component</>,
};

export const Mdx = (props: MdxProps) => {
  const { mdxSource, components: componentsInput } = props;
  const components = {
    ...commonMdxComponents,
    ...(componentsInput ?? {}),
  };
  return <MDXRemote {...mdxSource} components={components} />;
};
