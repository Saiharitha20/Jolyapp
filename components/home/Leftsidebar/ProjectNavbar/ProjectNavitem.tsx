import Image from 'next/image';
import Link from 'next/link';

const ProjectNavItem = ({ project }: { project: { id: string; name: string; icon: string } }) => {
  return (
    <Link href={`/projects/${project.id}`} key={project.id}>
      <div className="w-[224px] h-[40px] flex items-center px-3 gap-3 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors">
        {/* Project Icon */}
        <div className="w-6 h-6 relative flex-shrink-0">
          <Image
            src={project.icon}
            alt={project.name}
            fill
            className="object-contain rounded  hover:grayscale-0 transition-all"
          />
        </div>
        
        {/* Project Name */}
        <span className="text-sm text-gray-900 truncate">{project.name}</span>
      </div>
    </Link>
  );
};

export default ProjectNavItem;
