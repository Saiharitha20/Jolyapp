'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar'; // Ensure Sidebar is a Client Component
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header'; // Ensure Header is a Client Component
import CategoryBanner from '@/app/projects/[id]/category/components/Category Banner/banner';
import CategoryCards from '@/app/projects/[id]/category/components/Category Cards/CategoryCards';
import { Project } from '@/types';

export default function CategoryPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [projects] = useAtom(projectsAtom);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    setProject(foundProject || null);
  }, [projectId, projects]);

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Loading project...</div>;
  }

  return (
    <ProjectLayout>
      <div className="flex">
        <Sidebar projectId={projectId} projectName={project.name} activePage="category" />
        <div className="flex-1 ">
          <Header projectId={projectId} /> {/* Pass projectId, not 'projectId' as a string */}
          <CategoryBanner />
          <CategoryCards projectId={projectId} />
        </div>
      </div>
    </ProjectLayout>
  );
}
