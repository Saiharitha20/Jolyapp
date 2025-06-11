'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PeopleGallery() {
  const { id: projectId } = useParams();
  const people = [
    '/Project-icons/photo1.svg',
    '/Project-icons/photo2.svg',
    '/Project-icons/photo3.svg',
    '/Project-icons/photo4.svg',
    '/Project-icons/photo5.svg',
    '/Project-icons/photo2.svg',
  ];
  
  return (
    <div className="w-[1176px] h-[132px] px-4 py-2">
      <div className="flex gap-4">
        {people.map((person, index) => (
          <Link href={`/projects/${projectId}/people/${index + 1}`} key={index}>
            <div className="w-[116px] h-[116px] p-2 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors">
              <Image 
                src={person} 
                alt={`Person ${index + 1}`} 
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
 