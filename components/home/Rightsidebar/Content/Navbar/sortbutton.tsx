import Image from 'next/image';

const SortButton = () => {
  return (
    <button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-md border-none cursor-pointer p-2 filter grayscale hover:grayscale-0 transition-all">
      <Image src="/Project-icons/Sort.svg" alt="Sort" width={16} height={16} />
    </button>
  );
};

export default SortButton;
