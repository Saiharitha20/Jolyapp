'use client'; // Add this directive at the top

import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import ProjectNavItem from './ProjectNavitem';

const ProjectList = () => {
  const [projects] = useAtom(projectsAtom);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-1">
        {projects.map((project) => (
          <ProjectNavItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
