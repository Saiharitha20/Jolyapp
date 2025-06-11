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
import { ChevronLeft, MoreHorizontal, Copy, Download, Filter, List, Grid3X3 } from 'lucide-react';
import { Project } from '@/types';

export default function PersonDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const personId = params.personId as string;
  const [projects] = useAtom(projectsAtom);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projectId, projects]);

  // All photos for this specific person
  const personPhotos = [
    '/Project-icons/photo1.svg',
    '/Project-icons/photo2.svg',
    '/Project-icons/photo3.svg',
  ];

  const currentPersonPhoto = personPhotos[0];

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Loading project...</div>;
  }

  return (
    <ProjectLayout>
      <div className="flex">
        <Sidebar projectId={projectId} projectName={project.name} activePage="people" />
        <div className="flex-1">
          <Header projectId={projectId} />
          
          <div className="p-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6">
              <Link 
                href={`/projects/${projectId}/people`}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>People</span>
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">Person {personId}</span>
            </nav>

            {/* Person Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={currentPersonPhoto}
                    alt={`Person ${personId}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">Add name</h1>
                  <p className="text-gray-500">353 photos</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Copy className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
                <button className="px-4 py-2 bg-white-600 text-black rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>

            {/* Gallery Controls */}
            <div className="flex items-center justify-end gap-2 mb-6">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Filter className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <List className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-lg">
                <Grid3X3 className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Photo Gallery - 3 Photos at 216x216px */}
            <div className="flex gap-6">
              {personPhotos.map((photo, index) => (
                <Link 
                  key={index}
                  href={`/projects/${projectId}/people/${personId}/photo/${index + 1}`}
                  className="group"
                >
                  <div className="w-[216px] h-[216px] rounded-2xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                    <Image
                      src={photo}
                      alt={`Person ${personId} - Photo ${index + 1}`}
                      width={216}
                      height={216}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
