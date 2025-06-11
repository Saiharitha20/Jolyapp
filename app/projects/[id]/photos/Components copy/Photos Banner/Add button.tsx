'use client';
import Image from 'next/image';

export default function AddButton() {
  return (
    <button className="p-1 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/data%20flow.svg" 
        alt="Add" 
        width={24} 
        height={24} 
      />
    </button>
  );
}
