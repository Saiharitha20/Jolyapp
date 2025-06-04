'use client';
import Image from 'next/image';

export default function AllPhotosButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/all.svg" 
        alt="All photos" 
        width={20} 
        height={20}
      />
    </button>
  );
}
