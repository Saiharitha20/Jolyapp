// components/common/IconButton.tsx
'use client';

import Image from 'next/image';

interface IconButtonProps {
  iconSrc: string;
  altText: string;
  onClick?: () => void;
}

export default function IconButton({ iconSrc, altText, onClick }: IconButtonProps) {
  return (
    <button 
      className="p-2 hover:bg-gray-100 rounded-full"
      onClick={onClick}
    >
      <Image 
        src={iconSrc} 
        alt={altText} 
        width={20} 
        height={20} 
      />
    </button>
  );
}
