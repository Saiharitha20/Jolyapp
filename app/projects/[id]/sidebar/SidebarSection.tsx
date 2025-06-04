// components/sidebar/SidebarSection.tsx
import { ReactNode } from 'react';

interface SidebarSectionProps {
  title?: string;
  children: ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <>
    {title && <div className="px-3 mt-6 text-gray-500 text-sm font-medium">{title}</div>}
    <div className="flex flex-col gap-3 mt-4">
      {children}
    </div>
  </>
);

export default SidebarSection;
