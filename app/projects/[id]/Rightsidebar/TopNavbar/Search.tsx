'use client';

import { useRouter } from 'next/navigation';

export default function Search({ projectId }: { projectId: string }) {
  const router = useRouter();

  const handleClick = () => {
    if (!projectId) {
      console.error('Project ID is missing. Cannot navigate.');
      return;
    }
    // Navigate to the desired page
    const destination = `/projects/${projectId}/search`;
    router.push(destination);
  };

  return (
    <div className="relative w-full">
      {/* Search Icon on the right */}
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Non-editable, clickable input */}
      <input
        placeholder="Search photos, categories and more.."
        readOnly // Makes the input non-editable
        onClick={handleClick} // Navigate when clicked
        className="w-full h-10 pl-4 pr-10 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      />
    </div>
  );
}
