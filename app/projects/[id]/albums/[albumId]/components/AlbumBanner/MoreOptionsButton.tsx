'use client';

import IconButton from './IconButton';

interface MoreOptionsButtonProps {
  onClick?: () => void;
}

export default function MoreOptionsButton({ onClick }: MoreOptionsButtonProps) {
  return (
    <IconButton 
      iconSrc="/Project-icons/more.svg" 
      altText="More options" 
      onClick={onClick}
    />
  );
}
