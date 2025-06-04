// components/category/PhotoType.tsx
'use client';

import CategoryCard from './CategoryCard';

interface PhotoTypeProps {
  projectId: string;
}

export default function PhotoType({ projectId }: PhotoTypeProps) {
  const photoTypeCategory = {
    id: 'photo-type',
    name: 'Photo type',
    icon: '/Project-icons/photo type.svg',
    count: '353 photos • 4 groups'
  };
  
  return <CategoryCard projectId={projectId} category={photoTypeCategory} />;
}
