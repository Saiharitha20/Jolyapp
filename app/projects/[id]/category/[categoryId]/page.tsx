'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import { MoreHorizontal, Grid3X3, Plus } from 'lucide-react';
import { Project } from '@/types';

export default function CategoryDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const categoryId = params.categoryId as string;
  const [projects] = useAtom(projectsAtom);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projectId, projects]);

  // Photo groups data
  const photoGroups = [
    {
      id: 'candid',
      name: 'Candid',
      photoCount: 30,
      thumbnail: '/Project-icons/photo1.svg'
    },
    {
      id: 'landscape',
      name: 'Landscape',
      photoCount: 90,
      thumbnail: '/Project-icons/photo2.svg'
    },
    {
      id: 'panarama',
      name: 'Panarama',
      photoCount: 30,
      thumbnail: '/Project-icons/photo3.svg'
    },
    {
      id: 'portrait',
      name: 'Portrait',
      photoCount: 90,
      thumbnail: '/Project-icons/photo4.svg'
    }
  ];

  // Other photos data
  const otherPhotos = [
    '/Project-icons/photo1.svg',
    '/Project-icons/photo2.svg',
    '/Project-icons/photo3.svg',
    '/Project-icons/photo4.svg',
    '/Project-icons/photo5.svg',
  ];

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Loading project...</div>;
  }

  return (
    <ProjectLayout>
      <div className="flex h-screen">
        <Sidebar projectId={projectId} projectName={project.name} activePage="categories" />
        <div className="flex-1 flex flex-col">
          <Header projectId={projectId} />
          
          {/* Main scrollable content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                <Link 
                  href={`/projects/${projectId}/category`}
                  className="hover:text-gray-900"
                >
                  Categories
                </Link>
                <span className="text-gray-400">›</span>
                <span className="text-gray-900">Photo type</span>
              </nav>

              {/* Page Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-semibold mb-1">Photo type</h1>
                  <p className="text-gray-500">353 photos • 4 groups</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Grid3X3 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white-200 text-black rounded-lg hover:bg-white-700">
                   
                    New group
                  </button>
                </div>
              </div>

              {/* Groups Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Groups</h2>
                <div className="grid grid-cols-4 gap-2">
                  {photoGroups.map((group) => (
                    <Link 
                      key={group.id}
                      href={`/projects/${projectId}/category/${group.id}`}
                      className="group cursor-pointer"
                    >
                      <div className="w-[216px] h-[216px] rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                        <Image
                          src={group.thumbnail}
                          alt={group.name}
                          width={216}
                          height={216}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="font-medium text-gray-900">{group.name}</h3>
                        <p className="text-sm text-gray-500">{group.photoCount} photos</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Other</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Grid3X3 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {otherPhotos.map((photo, index) => (
                    <Link 
                      key={index}
                      href={`/projects/${projectId}/categories/other/${index + 1}`}
                      className="group flex-shrink-0"
                    >
                      <div className="w-[216px] h-[216px] rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                        <Image
                          src={photo}
                          alt={`Other photo ${index + 1}`}
                          width={216}
                          height={216}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
