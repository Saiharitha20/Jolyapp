'use client';

import AllPhotosButton from './All photos button';
import FlaggedButton from './Flagged button';
import GridViewButton from './Grid view button';
import SortButton from './Sort button';
import SortByDateButton from './Sort by date button';
import PhotoGallerySection from './Photo Gallery Section';

export default function PhotosGallery() {
  const photos = [
    '/Project-icons/photo1.svg',
    '/Project-icons/photo2.svg',
    '/Project-icons/photo3.svg',
    '/Project-icons/photo4.svg',
    '/Project-icons/photo5.svg',
    '/Project-icons/photo5.svg',
  ];

  return (
    <div className="p-4 ">
      <div className=" w-[1144px] h-[32px] flex justify-between items-center mb-4 ">
        <div className="flex gap-6 ">
          <AllPhotosButton />
          <FlaggedButton />
        </div>
        <div className="flex gap-3 ">
          <SortButton />
          <SortByDateButton />
          <GridViewButton />
        </div>
      </div>
      <div className="bg-gray-400 ">
      <PhotoGallerySection photos={photos} />
    </div>
    </div>
  );
}
