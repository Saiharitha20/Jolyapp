'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PhotosGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  const photos = [
    '/Project-icons/photo1.svg',
    '/Project-icons/photo2.svg',
    '/Project-icons/photo3.svg',
    '/Project-icons/photo4.svg',
    '/Project-icons/photo5.svg',
    '/Project-icons/photo1.svg',
  ];
  
  return (
    <div className="w-[1176px] h-[448px] grid grid-cols-5 gap-4 ">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className={`aspect-square rounded-2xl overflow-hidden relative  ${
            selectedPhoto === index ? 'ring-2 ring-indigo-500' : ''
          }`}
          onClick={() => setSelectedPhoto(index)}
        >
          <Image 
            src={photo} 
            alt={`Photo ${index + 1}`} 
            fill
            className="object-cover"
          />
          
          {selectedPhoto === index && (
            <>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-indigo-500 border border-white rounded"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 border border-white rounded"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-500 border border-white rounded"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-indigo-500 border border-white rounded"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
