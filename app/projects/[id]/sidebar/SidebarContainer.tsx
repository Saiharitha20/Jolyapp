// components/sidebar/SidebarContainer.tsx
import { ReactNode } from 'react';

interface SidebarContainerProps {
  children: ReactNode;
}

const SidebarContainer = ({ children }: SidebarContainerProps) => (
  <div className="w-[256px] h-900 p-4 flex flex-col  border-r  filter">
    {children}
  </div>
);

export default SidebarContainer;
