'use client';
import Image from 'next/image';

export default function AddPhotosButton() {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full">
      <Image 
        src="/Project-icons/add%20photos.svg" 
        alt="Add Photos" 
        width={24} 
        height={24} 
      />
    </button>
  );
}
