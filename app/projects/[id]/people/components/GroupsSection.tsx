'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function GroupsSection() {
  const { id: projectId } = useParams();
  
  return (
    <div className=" w-[1176px] h-[264px] px-4 pb-6 ">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Groups</h3>
      <div className="flex gap-4">
        {/* First group card with grid layout */}
        <Link href={`/projectpage/${projectId}/people/group/1`} className="block">
          <div className="w-[216px] h-[216px] rounded-md overflow-hidden relative bg-gray-100">
            <div className="grid grid-cols-2 h-full">
              <Image 
                src="/Project-icons/group%20photo.svg" 
                alt="Group" 
                width={108}
                height={216}
                className="object-cover"
              />
              <Image 
                src="/Project-icons/group%20photo1.svg" 
                alt="Group" 
                width={108}
                height={216}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-2 left-2 p-2">
              <h3 className="text-xs font-medium text-gray-900 mb-1">Dexter & penny</h3>
              <p className="text-xs font-medium text-gray-500">32 photos</p>
            </div>
          </div>
        </Link>
        
        {/* Second group card with single image */}
        <Link href={`/projectpage/${projectId}/people/group/2`} className="block">
          <div className="w-[216px] h-[216px] rounded-md overflow-hidden relative bg-gray-100 group">
            <Image 
              src="/Project-icons/group%20photo.svg" 
              alt="Group" 
              width={216}
              height={216}
              className="object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-3 bg-white bg-opacity-90 rounded-md flex items-center gap-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
              <Image 
                src="/Project-icons/veiw idea.svg" 
                alt="View" 
                width={24}
                height={24}
              />
            </div>
            <div className="absolute bottom-2 left-2 p-2">
              <h3 className="text-xs font-medium text-gray-900 mb-1">Dexter & penny</h3>
              <p className="text-xs font-medium text-gray-500">32 photos</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
