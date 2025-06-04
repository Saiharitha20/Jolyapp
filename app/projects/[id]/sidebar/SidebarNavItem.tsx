// components/sidebar/SidebarNavItem.tsx
import Image from 'next/image';
import Link from 'next/link';

interface SidebarNavItemProps {
  href: string;
  icon: string;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

const SidebarNavItem = ({ href, icon, label, onClick }: SidebarNavItemProps) => (
  <Link 
    href={href}
    onClick={onClick}
    className="flex items-center gap-3 w-[224px] h-[40px] px-3 rounded-md cursor-pointer transition-colors duration-200 "
  >
    <Image 
      src={`/Project-icons/${icon}.svg`}
      alt={label}
      width={16}
      height={16}
    />
    <span className="text-sm font-medium text-gray-900">{label}</span>
  </Link>
);

export default SidebarNavItem;
