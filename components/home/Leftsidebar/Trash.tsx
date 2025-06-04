import Image from 'next/image';

const Trash = () => {
  return (
    <div className="  bottom-9 max-w-[1184px] mx-auto w-full mt-auto pt-2 ">
      <div className="w-6 h-6 relative flex-shrink-0 grid place-items-center">
        <Image
          src="/Project-icons/trash.svg"
          alt="Trash"
          fill
          className="grayscale hover:grayscale-0 object-contain transition-all"
        />
      </div>
      <span className="text-sm truncate">Trash</span>
    </div>
  );
};

export default Trash;
