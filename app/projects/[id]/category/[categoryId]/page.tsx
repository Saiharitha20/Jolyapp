import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import PhotoTypeContent from '@/app/projects/[id]/category/components/Category Cards/Photo type/components/PhotoTypeContent'

export default function PhotoTypePage() {
  return (
    <ProjectLayout>
         <Header projectId={''} />
      <Sidebar projectId={''} projectName={''} />
      <div className="main-content">
        
        <PhotoTypeContent />
      </div>
    </ProjectLayout>
  );
}
