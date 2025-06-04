'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import Banner from '@/app/projects/[id]/dexter/content/Banner';
import GalleryContent from '@/app/projects/[id]/dexter/content/GalleryContent';
import { Project } from '@/types';

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [projects] = useAtom(projectsAtom);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projectId, projects]);

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Loading project...</div>;
  }

  return (
    
    <ProjectLayout>
      <div className="flex">
        <Sidebar projectId={projectId} projectName={project.name} />
        <div className="flex-1">
          <Header projectId={'projectId'} />
          <Banner title={project.name} />
          <GalleryContent projectId={projectId} />
        </div>
      </div>
    </ProjectLayout>
  );
}
