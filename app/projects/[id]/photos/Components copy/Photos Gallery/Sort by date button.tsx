'use client';
import Image from 'next/image';

export default function SortByDateButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/sort by date.svg" 
        alt="Sort by date" 
        width={20} 
        height={20}
      />
    </button>
  );
}
