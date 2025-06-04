// components/LeftSidebar/Navbar.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <Link href="/">
        <div className={`flex items-center p-2 px-3 gap-3 rounded-md cursor-pointer mb-1 bg-gray-200
          ${pathname === '/' ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
          <Image
            src="/Project-icons/home.svg"
            alt="Home"
            width={16}
            height={16}
            className="grayscale"
          />
          <div className="w-[224px] h-[40px] flex items-center ">
  <span className="text-sm text-gray-900 ">Home</span>
</div>
        </div>
      </Link>

      <div className=" w-[224px] h-[40px] flex items-center p-2 px-3 gap-3 rounded-md cursor-pointer mb-1 ">
        <span className="text-sm text-gray-900">Projects</span>
      </div>
    </>
  );
};

export default Navbar;
