export default function SearchInput() {
  return (
    <div className="relative w-full h-10">
      <svg 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" 
        width="10" 
        height="20" 
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
      <input 
        type="search" 
        className="w-full h-full pl-10 pr-4 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Search photos, categories and more.." 
      />
    </div>
  );
}
