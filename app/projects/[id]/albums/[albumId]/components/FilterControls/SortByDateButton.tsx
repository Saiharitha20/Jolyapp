// components/filters/SortByDateButton.tsx
'use client';

import IconButton from './IconButton';

interface SortByDateButtonProps {
  onClick?: () => void;
}

export default function SortByDateButton({ onClick }: SortByDateButtonProps) {
  return (
    <IconButton 
      iconSrc="/Project-icons/sort by date.svg" 
      altText="Sort by date" 
      onClick={onClick}
    />
  );
}
