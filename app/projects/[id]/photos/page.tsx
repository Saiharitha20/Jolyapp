'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import PhotosBanner from '@/app/projects/[id]/photos/Components copy/Photos Banner/PhotosBanner';
import PhotosGallery from '@/app/projects/[id]/photos/Components copy/Photos Gallery/PhotosGallery';
import { Project } from '@/types';

export default function PhotosPage() {
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
        <Sidebar projectId={projectId} projectName={project.name} activePage="photos" />
        <div className="flex-1">
          <Header projectId={'projectId'} />
          <PhotosBanner />
          <PhotosGallery />
        </div>
      </div>
    </ProjectLayout>
  );
}
