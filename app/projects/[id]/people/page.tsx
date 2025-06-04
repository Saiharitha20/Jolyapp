'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import PeopleBanner from '@/app/projects/[id]/people/components/PeopleBanner';
import GroupsSection from '@/app/projects/[id]/people/components/GroupsSection';
import PeopleGallery from '@/app/projects/[id]/people/components/PeopleGallery';
import { Project } from '@/types';

export default function PeoplePage() {
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
        <Sidebar projectId={projectId} projectName={project.name} activePage="people" />
        <div className="flex-1 ">
          <Header projectId={'projectId'} />

          <PeopleBanner />
          <GroupsSection />
          <br></br>
          <PeopleGallery />
         
        </div>
      </div>
    </ProjectLayout>
  );
}
