// components/category/Pets.tsx
'use client';

import CategoryCard from './CategoryCard';

interface PetsProps {
  projectId: string;
}

export default function Pets({ projectId }: PetsProps) {
  const petsCategory = {
    id: 'pets',
    name: 'Pets',
    icon: '/Project-icons/pet.svg',
    count: '353 photos'
  };
  
  return <CategoryCard projectId={projectId} category={petsCategory} />;
}
