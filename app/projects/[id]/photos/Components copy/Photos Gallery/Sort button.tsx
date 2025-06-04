'use client';
import Image from 'next/image';

export default function SortButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/sort.svg" 
        alt="Sort" 
        width={20} 
        height={20}
      />
    </button>
  );
}
