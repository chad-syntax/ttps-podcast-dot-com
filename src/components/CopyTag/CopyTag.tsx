import { useRef, useState, useEffect } from 'react';
import { StyledCopyTag } from './CopyTag.styled';

type NodeJSTimeout = ReturnType<typeof setTimeout>;

interface CopyState {
  isCopied: boolean;
  copyText: string;
}

const defaultCopyState = {
  isCopied: false,
  copyText: '🔗 Copy',
} as const;

const activeCopyState = {
  isCopied: true,
  copyText: 'Copied!',
} as const;

export const CopyTag = () => {
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

  const onClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(location.href);
      setCopyState(activeCopyState);
    } catch (e) {
      setCopyState(defaultCopyState);
      alert('Failed to copy to clipboard :(');
    }
  };

  return <StyledCopyTag onClick={onClick}>{copyText}</StyledCopyTag>;
};
