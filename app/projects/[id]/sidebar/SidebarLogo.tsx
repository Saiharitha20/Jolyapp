// components/sidebar/SidebarLogo.tsx
import Image from 'next/image';

const SidebarLogo = () => (
  <div className="w-[224px] h-[54px] p-2 flex items-center">
    <Image 
      src="/Project-icons/Logo.svg" 
      alt="Logo" 
      width={24} 
      height={24} 
    />
  </div>
);

export default SidebarLogo;
