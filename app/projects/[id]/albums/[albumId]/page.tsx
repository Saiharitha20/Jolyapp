'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom, albumsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import AlbumBanner from '@/app/projects/[id]/albums/[albumId]/components/AlbumBanner/AlbumBanner';
import FilterControls from '@/app/projects/[id]/albums/[albumId]/components/FilterControls/FilterControls';
import PhotosGrid from './components/PhotosGrid';
import { Project, Album } from '@/types';

export default function AlbumPage() {
  const params = useParams();
  const projectId = params.id as string;
  
  const [projects] = useAtom(projectsAtom);
  const [albums] = useAtom(albumsAtom);
  
  const [project, setProject] = useState<Project | null>(null);
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }

    // Set default album to dog park
    setAlbum({
      id: 'dog-park',
      name: 'Dog park',
      coverImage: '/Project-icons/photo1.svg',
      photoCount: 353,
      createdAt: new Date()
    });
  }, [projectId, projects, albums]);

  if (!project || !album) {
    return <div className="flex h-screen items-center justify-center">Loading album...</div>;
  }

  return (
    <ProjectLayout>
      <div className="flex">
        <Sidebar 
          projectId={projectId} 
          projectName={project.name} 
          activePage="albums" 
        />
        <div className="flex-1 ">
          <Header projectId={'projectId'} />
          <div className="p-4">
            <AlbumBanner album={album} />
            <FilterControls />
            <PhotosGrid />
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
