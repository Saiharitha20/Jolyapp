'use client';

import IconButton from './IconButton';

interface DataFlowButtonProps {
  onClick?: () => void;
}

export default function DataFlowButton({ onClick }: DataFlowButtonProps) {
  return (
    <IconButton 
      iconSrc="/Project-icons/data flow.svg" 
      altText="Data flow" 
      onClick={onClick}
    />
  );
}
