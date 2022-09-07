import styled from 'styled-components';
import { BlogFooter } from '../BlogFooter/BlogFooter';

export const StyledBlogLayout = styled.main`
  font-family: ${(p) => p.theme.ffJetbrainsMono};
`;

export const BlogLayout = ({ children }) => (
  <StyledBlogLayout>
    {children}
    <BlogFooter />
  </StyledBlogLayout>
);
