'use client';

export default function PeopleBanner() {
  return (
    <div className="w-[1176px] h-[104px] px-4 py-6 ">
      <div className="flex justify-between items-start ">
        <div className="flex flex-col gap-1 ">
          <h2 className="text-3xl font-medium text-gray-900">People</h2>
          <p className="text-sm font-medium text-gray-500">353 photos</p>
        </div>
        <button className="px-3 py-1.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-md bg-gray-50 ">
          New group
        </button>
      </div>
    </div>
  );
}
