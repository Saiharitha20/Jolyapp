import Image from 'next/image';

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <div className="h-56 relative px-4">
     <div className="absolute left-4 top-4 right-4 h-32 bg-gray-100 rounded-2xl"></div>

      <div className=" w-1144 h-32 absolute left-4 right-4 bottom-4 h-8 flex justify-between items-center ">
        <h1 className="  text-3xl font-medium text-gray-900">{title}</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Image 
              src="/Project-icons/more.svg" 
              alt="more" 
              width={24}
              height={24}
            />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Image 
              src="/Project-icons/add photos.svg" 
              alt="add photos" 
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
