import styled from 'styled-components';

export const StyledHero = styled.section`
  background-color: ${(p) => p.theme.background};
  min-height: 40vh;
  @media screen and (max-width: 1000px) {
    min-height: 30vh;
  }
  h1 {
    color: white;
    text-align: center;
    margin: 0 auto;
    font-size: 4.2rem;
    padding: 2rem 0 4rem;
    max-width: 60rem;
    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
      padding: 1rem 0 4rem;
    }
  }
`;

export const HeroArt = styled.img`
  width: 100%;
  max-width: 60rem;
  display: block;
  margin: 0 auto;
  padding: 4rem 8rem 0;
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const ArtWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 40vh;
  @media screen and (max-width: 1000px) {
    min-height: 30vh;
  }
`;

export const DecentralizedVersion = styled.div`
  color: white;
  background-color: ${(p) => p.theme.ethPurple};
  font-family: ${(p) => p.theme.ffPressStart};
  text-align: center;
  padding: 2.4rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`;
