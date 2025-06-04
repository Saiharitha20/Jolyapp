import Image from 'next/image';
import Link from 'next/link';

interface CategoriesSectionProps {
  projectId: string;
}

export default function CategoriesSection({ projectId }: CategoriesSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-medium leading-7 text-gray-900 mb-4 ">Categories</h2>
      <div className="flex flex-wrap gap-4">
        <Link href={`/projectpage/${projectId}/categories/pet`} className="block">
          <div className="w-[280px] h-[72px] p-2 bg-gray-100 rounded-lg flex items-center gap-3  transition-colors">
            <div className="w-[56px] h-[56px]">
              <Image 
                src="/Project-icons/pet.svg" 
                alt="Pet" 
                className="w-full h-full rounded-lg object-cover"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-medium leading-6 text-gray-900">Pet</div>
              <div className="text-xs font-medium leading-4 text-gray-900">353 photos</div>
            </div>
          </div>
        </Link>
        <Link href={`/projectpage/${projectId}/categories/photo-type`} className="block">
          <div className="w-[280px] h-[72px] p-2  rounded-lg flex items-center gap-3  transition-colors">
            <div className="w-[56px] h-[56px]">
              <Image 
                src="/Project-icons/photo type.svg" 
                alt="Photo type" 
                className="w-full h-full rounded-lg object-cover"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-medium leading-6 text-gray-900">Photo type</div>
              <div className="text-xs font-medium leading-4 text-gray-900">353 photos • 4 groups</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
