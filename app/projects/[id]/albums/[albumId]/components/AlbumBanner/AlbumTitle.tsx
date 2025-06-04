'use client';

interface AlbumTitleProps {
  name: string;
  photoCount: number;
}

export default function AlbumTitle({ name, photoCount }: AlbumTitleProps) {
  return (
    <div>
      <h1 className="text-3xl font-medium text-gray-900">{name}</h1>
      <p className="text-sm text-gray-500 mt-1">{photoCount} photos</p>
    </div>
  );
}
