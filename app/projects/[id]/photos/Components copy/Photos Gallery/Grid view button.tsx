'use client';
import Image from 'next/image';

export default function GridViewButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/grid view.svg" 
        alt="Grid view" 
        width={20} 
        height={20}
      />
    </button>
  );
}
