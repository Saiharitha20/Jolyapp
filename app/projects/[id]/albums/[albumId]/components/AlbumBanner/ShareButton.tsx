'use client';

import IconButton from './IconButton';

interface ShareButtonProps {
  onClick?: () => void;
}

export default function ShareButton({ onClick }: ShareButtonProps) {
  return (
    <IconButton 
      iconSrc="/Project-icons/share.svg" 
      altText="Share" 
      onClick={onClick}
    />
  );
}
