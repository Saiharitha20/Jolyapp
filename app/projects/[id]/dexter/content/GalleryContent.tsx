import IdeasSection from './IdeasSection';
import PeopleSection from './PeopleSection';
import CategoriesSection from './CategoriesSection';

interface GalleryContentProps {
  projectId: string;
}

export default function GalleryContent({ projectId }: GalleryContentProps) {
  return (
    <div className="px-4 pb-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 224px)' }}>
      <IdeasSection projectId={projectId} />
      <PeopleSection projectId={projectId} />
      <CategoriesSection projectId={projectId} />
    </div>
  );
}
