'use client';

import AddButton from './Add button';
import AddPhotosButton from './Add Photos button';
import MoreButton from './More button';

export default function PhotosBanner() {
  return (

    <div className=" w-[1176px] h-[104px] p-4 ">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-medium text-gray-900 ">Photos</h1>
          <p className="text-sm text-gray-500 mt-1">353 photos</p>
        </div>
        <div className="flex items-center gap-3">
          <MoreButton />
          <AddButton onClick={function (): void {
            throw new Error('Function not implemented.');
          } } />
          <AddPhotosButton />
        </div>
      </div>
    </div>
  );
}
