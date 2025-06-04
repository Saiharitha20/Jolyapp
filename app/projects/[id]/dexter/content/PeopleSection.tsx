import Image from 'next/image';
import Link from 'next/link';

interface PeopleSectionProps {
  projectId: string;
}

export default function PeopleSection({ projectId }: PeopleSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-medium leading-7 text-gray-900 mb-4 ">People</h2>
      <div className="flex flex-wrap gap-4">
        <Link href={`/projectpage/${projectId}/people/1`}>
          <div className="w-[116px] h-[116px] p-2 rounded-2xl transition-colors">
            <Image 
              src="/Project-icons/people2.svg" 
              alt="Dog 1" 
              className="w-[100px] h-[100px] rounded-lg object-cover"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <Link href={`/projectpage/${projectId}/people/2`}>
          <div className="w-[116px] h-[116px] p-2  rounded-2xl ">
            <Image 
              src="/Project-icons/people2.svg" 
              alt="Dog 2" 
              className="w-[100px] h-[100px] rounded-lg object-cover"
              width={100}
              height={100}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
