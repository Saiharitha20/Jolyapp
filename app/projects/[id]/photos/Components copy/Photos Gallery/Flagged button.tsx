'use client';
import Image from 'next/image';

export default function FlaggedButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/flagged.svg" 
        alt="Flagged photos" 
        width={20} 
        height={20}
      />
    </button>
  );
}
