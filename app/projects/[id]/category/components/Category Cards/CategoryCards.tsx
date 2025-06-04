'use client';
import Pets from './pets'; // Ensure filename is Pets.tsx (case-sensitive)
import PhotoType from './Phototype'; // Ensure filename is PhotoType.tsx

interface CategoryCardsProps {
  projectId: string;
}

export default function CategoryCards({ projectId }: CategoryCardsProps) {
  return (
    <div className="px-4 ">
      <div className="flex gap-4">
        <Pets projectId={projectId} />
        <PhotoType projectId={projectId} />
      </div>
    </div>
  );
}
