'use client';
import Image from 'next/image';

export default function MoreButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/more.svg" 
        alt="More" 
        width={24} 
        height={24} 
      />
    </button>
  );
}
