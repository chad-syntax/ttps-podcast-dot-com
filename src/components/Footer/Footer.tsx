import { StyledFooter } from './Footer.styled';

export const Footer = () => (
  <StyledFooter id="contact">
    <h3>
      Ask a question to be read and answered on the show:{' '}
      <a href="mailto:query@ttpspodcast.com?subject=from%20ttpspodcast%20dot%20com">
        query@ttpspodcast.com
      </a>
    </h3>
    <h4>
      Interested in being a guest on the show:{' '}
      <a href="mailto:guest@ttpspodcast.com?subject=from%20ttpspodcast%20dot%20com">
        guest@ttpspodcast.com
      </a>
    </h4>
    <h4>
      Interested in being a sponsor or collaborator:{' '}
      <a href="mailto:business@ttpspodcast.com?subject=from%20ttpspodcast%20dot%20com">
        business@ttpspodcast.com
      </a>
    </h4>
    <div>
      <a
        href="https://twitter.com/SyntaxChad"
        rel="noopener noreferrer"
        target="_blank"
      >
        twitter
      </a>
      {' | '}
      <a
        href="https://www.twitch.tv/chad_syntax"
        rel="noopener noreferrer"
        target="_blank"
      >
        twitch
      </a>
      {' | '}
      <a
        href="https://vm.tiktok.com/TTPdjqwbr3/"
        rel="noopener noreferrer"
        target="_blank"
      >
        tiktok
      </a>
      {' | '}
      <a
        href="https://app.ens.domains/name/chadsyntax.eth/details"
        rel="noopener noreferrer"
        target="_blank"
      >
        chadsyntax.eth
      </a>
      {' | '}
      <a
        href="https://discord.gg/Erpgcu9QVs"
        rel="noopener noreferrer"
        target="_blank"
      >
        discord
      </a>
      {' | '}
      <a
        href="https://github.com/chad-syntax"
        rel="noopener noreferrer"
        target="_blank"
      >
        github
      </a>
    </div>
  </StyledFooter>
);
