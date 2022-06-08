import {
  StyledHero,
  HeroArt,
  ArtWrapper,
  DecentralizedVersion,
} from './Hero.styled';
import ttpsArt from './ttps-art-880-880.png';
import ethereumSvg from './ethereum.svg';
import { Mailchimp } from './Mailchimp';

interface HeroProps {
  comingSoonEnabled: boolean;
  decentralized?: boolean;
}

export const Hero = ({ comingSoonEnabled, decentralized }: HeroProps) => (
  <StyledHero id="hero">
    {decentralized && (
      <DecentralizedVersion>
        <img src={ethereumSvg.src} />
        &nbsp;
        <span>TTPS DECENTRALIZED VERSION!</span>
        &nbsp;
        <img src={ethereumSvg.src} />
      </DecentralizedVersion>
    )}
    <ArtWrapper>
      <HeroArt
        alt="Talking Tech while Poking Smot podcast album cover"
        src={ttpsArt}
        width={440}
        height={440}
      />
    </ArtWrapper>
    <h1>
      A podcast where a sweaty silicon valley dev shouts into a microphone
    </h1>
    <Mailchimp />
  </StyledHero>
);
