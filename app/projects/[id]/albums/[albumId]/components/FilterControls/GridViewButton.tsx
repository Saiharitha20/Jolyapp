// components/filters/GridViewButton.tsx
'use client';

import IconButton from './IconButton';

interface GridViewButtonProps {
  onClick?: () => void;
}

export default function GridViewButton({ onClick }: GridViewButtonProps) {
  return (
    <IconButton 
      iconSrc="/Project-icons/grid view.svg" 
      altText="Grid view" 
      onClick={onClick}
    />
  );
}
