import Link from 'next/link';
import { useState, useEffect, useRef, Fragment } from 'react';
import { useRouter } from 'next/router';
import { ExitLink, BreadCrumbsNav, CopyTag } from './BreadCrumbs.styled';

type NodeJSTimeout = ReturnType<typeof setTimeout>;

interface CopyState {
  isCopied: boolean;
  copyText: string;
}

const defaultCopyState = {
  isCopied: false,
  copyText: '🔗 Click to Copy',
} as const;

const activeCopyState = {
  isCopied: true,
  copyText: 'Copied!',
} as const;

export const BreadCrumbs = () => {
  const { asPath } = useRouter();
  const [copyState, setCopyState] = useState<CopyState>(defaultCopyState);
  const { isCopied, copyText } = copyState;
  const timeoutRef = useRef<null | NodeJSTimeout>(null);

  useEffect(() => {
    if (isCopied) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCopyState(defaultCopyState);
      }, 3000);
    }
  }, [isCopied]);

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

        const handleLastClick = async (e) => {
          e.preventDefault();
          try {
            await navigator.clipboard.writeText(location.href);
            setCopyState(activeCopyState);
          } catch (e) {
            setCopyState(defaultCopyState);
            alert('Failed to copy to clipboard :(');
          }
        };

        return (
          <Fragment key={otherLink}>
            <span>{'/'}</span>
            <ExitLink
              href={href}
              onClick={isLast ? handleLastClick : undefined}
            >
              {otherLink}
              {isLast && (
                <span className="relative">
                  <CopyTag active={copyState.isCopied}>{copyText}</CopyTag>
                </span>
              )}
            </ExitLink>
          </Fragment>
        );
      })}
    </BreadCrumbsNav>
  );
};
