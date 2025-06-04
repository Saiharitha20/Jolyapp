import Image from 'next/image';

export default function PhotosGrid() {
  return (
    <div className="grid grid-cols-5 gap-2">
      {[...Array(11)].map((_, index) => (
        <div 
          key={index} 
          className="w-24 h-24 rounded-lg overflow-hidden"
        >
          <Image 
            src={`/Search-icons/${index + 1}.svg`} 
            alt={`Search result ${index + 1}`}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
