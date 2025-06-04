import Image from 'next/image';
import Link from 'next/link';

interface IdeasSectionProps {
  projectId: string;
}

export default function IdeasSection({ projectId }: IdeasSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-medium leading-7 text-gray-900 mb-4 ">Ideas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link href={`/projectpage/${projectId}/ideas/birthday`} className="block">
          <div className="w-full h-[216px] rounded-md overflow-hidden relative bg-gray-100 group">
            <Image 
              src="/Project-icons/Dexter.svg" 
              alt="Birthday" 
              className="w-full h-full object-cover" 
              width={276}
              height={216}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-3 bg-white bg-opacity-90 rounded-md flex items-center gap-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
              <Image 
                src="/Project-icons/veiw idea.svg" 
                alt="View idea" 
                width={24}
                height={24}
              />
            </div>
            <div className="absolute bottom-2 left-2 p-2">
              <div className="text-sm font-medium text-gray-900 mb-1">Birthday</div>
              <div className="text-xs text-gray-500">121 photos</div>
            </div>
          </div>
        </Link>
        <Link href={`/projectpage/${projectId}/ideas/untitled`} className="block">
          <div className="w-full h-[216px] rounded-md overflow-hidden relative bg-gray-100 group">
            <Image 
              src="/Project-icons/Dexter.svg" 
              alt="Untitled" 
              className="w-full h-full object-cover" 
              width={276}
              height={216}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2 px-3 bg-white bg-opacity-90 rounded-md flex items-center gap-1 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
              <Image 
                src="/Project-icons/veiw idea.svg" 
                alt="View idea" 
                width={24}
                height={24}
              />
            </div>
            <div className="absolute bottom-2 left-2 p-2">
              <div className="text-sm font-medium text-gray-900 mb-1">Untitled</div>
              <div className="text-xs text-gray-500">00 photos</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
