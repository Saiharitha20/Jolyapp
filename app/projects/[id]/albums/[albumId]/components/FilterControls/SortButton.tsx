// components/filters/SortButton.tsx
'use client';

import IconButton from './IconButton';

interface SortButtonProps {
  onClick?: () => void;
}

export default function SortButton({ onClick }: SortButtonProps) {
  return (
    <IconButton 
      iconSrc="/Project-icons/sort.svg" 
      altText="Sort" 
      onClick={onClick}
    />
  );
}
