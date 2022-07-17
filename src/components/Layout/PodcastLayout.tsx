import styled from 'styled-components';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const StyledPodcastLayout = styled.main`
  font-family: ${(p) => p.theme.ffUbuntu};

  @media screen and (max-width: 500px) {
    padding: 0 0.8rem;
    background-color: ${(p) => p.theme.background};
  }
`;

export const PodcastLayout = ({ children }) => (
  <StyledPodcastLayout>
    <Header />
    {children}
    <Footer />
  </StyledPodcastLayout>
);
