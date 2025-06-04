'use client';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: string;
}

interface CategoryCardProps {
  projectId: string;
  category: Category;
}

export default function CategoryCard({ projectId, category }: CategoryCardProps) {
  return (
    <Link
      href={`/projects/${projectId}/category/${category.id}`}
      className="block"
    >
      <div className="w-[280px] h-[72px] p-2 bg-gray-100 rounded-lg flex items-center gap-3 hover:bg-gray-200 transition-colors">
        <div className="w-[56px] h-[56px] rounded-lg overflow-hidden">
          <Image
            src={category.icon}
            alt={category.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-base font-medium text-gray-900">{category.name}</div>
          <div className="text-xs text-gray-500">{category.count}</div>
        </div>
      </div>
    </Link>
  );
}
