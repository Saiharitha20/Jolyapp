import Link from 'next/link';
import Image from 'next/image';

export default function SearchMenu() {
  const menuItems = [
    { icon: 'recent.svg', label: 'Recent' },
    { icon: 'ideas.svg', label: 'Ideas' },
    { icon: 'people.svg', label: 'People', link: '/projects/search/peoples' },
    { icon: 'categories.svg', label: 'Categories' },
    { icon: 'albums.svg', label: 'Albums' },
  ];

  return (
    <div className="flex flex-col w-full gap-2">
      {menuItems.map((item, index) => (
        item.link ? (
          <Link
            key={index}
            href={item.link}
            className="flex items-center w-full h-10 px-3 gap-3 rounded-md transition-colors hover:bg-gray-100"
          >
            <Image 
              src={`/Search-icons/${item.icon}`} 
              alt={item.label}
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm font-medium text-gray-900">{item.label}</span>
          </Link>
        ) : (
          <div 
            key={index}
            className="flex items-center w-full h-10 px-3 gap-3 rounded-md transition-colors hover:bg-gray-100"
          >
            <Image 
              src={`/Search-icons/${item.icon}`} 
              alt={item.label}
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm font-medium text-gray-900">{item.label}</span>
          </div>
        )
      ))}
    </div>
  );
}
