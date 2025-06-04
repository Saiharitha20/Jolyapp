// components/filters/FilterControls.tsx
'use client';

import SortButton from './SortButton';
import SortByDateButton from './SortByDateButton';
import GridViewButton from './GridViewButton';

export default function FilterControls() {
  const handleSort = () => {
    console.log('Sort clicked');
    // Implement sorting logic
  };

  const handleSortByDate = () => {
    console.log('Sort by date clicked');
    // Implement date sorting logic
  };

  const handleGridView = () => {
    console.log('Grid view clicked');
    // Implement grid view toggle logic
  };

  return (
    <div className=" h-[32px] flex justify-end mb-6 bg-gray-100">
      <div className="flex items-center gap-3">
        <SortButton onClick={handleSort} />
        <SortByDateButton onClick={handleSortByDate} />
        <GridViewButton onClick={handleGridView} />
      </div>
    </div>
  );
}
