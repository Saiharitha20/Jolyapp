import { ReactNode } from 'react';

interface ProjectLayoutProps {
  children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="w-full h-screen bg-white overflow-hidden">
      {children}
    </div>
  );
}
