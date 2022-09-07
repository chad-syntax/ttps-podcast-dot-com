import { useState } from 'react';
import {
  StyledPodcastLinks,
  PodcastLinksInner,
  StyledPodcastLink,
} from './PodcastLinks.styled';

import { PODCAST_LINKS } from './podcast-links';

export const PodcastLinks = () => {
  const [targetPlayer, setTargetPlayer] = useState<string | null>(null);
  return (
    <StyledPodcastLinks
      id="subscribe"
      onMouseLeave={() => setTargetPlayer(null)}
    >
      <h2>Subscribe with {targetPlayer || 'your favorite podcast player'}!</h2>
      <PodcastLinksInner>
        {PODCAST_LINKS.map((podcastLink) => (
          <StyledPodcastLink
            key={podcastLink.name}
            rel="noopener noreferrer"
            target="_blank"
            href={podcastLink.url}
          >
            {podcastLink.name}
            <img
              onMouseEnter={() => setTargetPlayer(podcastLink.name)}
              src={podcastLink.image.src}
              alt={`${podcastLink.name} logo`}
            />
          </StyledPodcastLink>
        ))}
      </PodcastLinksInner>
    </StyledPodcastLinks>
  );
};
