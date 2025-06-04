// app/projects/[id]/category/photo-type/page.tsx (or your main page)
// 'use client' only if needed
import { useParams } from 'next/navigation';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import PhotoTypeContent from '@/app/projects/[id]/category/components/Category Cards/Photo type/components/PhotoTypeContent';

export default function PhotoTypePage() {
  const params = useParams();
  const projectId = params.id as string;

  return (
    <ProjectLayout>
      {/* Vertical stack: Header top, content fills rest */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <Header projectId={projectId} />

        {/* Horizontal stack: Sidebar left, main content right */}
        <div className="flex flex-1">
          {/* Sidebar with fixed width */}
          <aside className="w-64 min-h-full border-r border-gray-200 bg-white">
            <Sidebar projectId={projectId} projectName="Dexter" activePage="category" />
          </aside>
          {/* Main content: grows, centers content */}
         
            <PhotoTypeContent />
          
        </div>
      </div>
    </ProjectLayout>
  );
}
