import Link from 'next/link';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { ExitLink, BreadCrumbsNav } from './BreadCrumbs.styled';
import { CopyTag } from '../CopyTag/CopyTag';

export const BreadCrumbs = () => {
  const { asPath } = useRouter();

  const otherLinks = asPath.split('/').filter(Boolean);

  return (
    <BreadCrumbsNav>
      <Link href="/">
        <ExitLink>&#60; Exit the cave</ExitLink>
      </Link>
      {otherLinks.map((otherLink, index) => {
        const previous = otherLinks[index - 1];
        const href = `/${previous ? `${previous}/` : ''}${otherLink}`;
        const isLast = index === otherLinks.length - 1;

        return (
          <Fragment key={otherLink}>
            <span>{'/'}</span>
            <ExitLink href={href}>{otherLink}</ExitLink>
            {isLast && <CopyTag />}
          </Fragment>
        );
      })}
    </BreadCrumbsNav>
  );
};
