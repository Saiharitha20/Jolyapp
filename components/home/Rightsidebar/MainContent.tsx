import Banner from './Banner';
import ProjectMenuNav from './Content/Navbar/Projectmenunav';
import SortButton from './Content/Navbar/sortbutton';
import ProjectGallery from './Content/ProjectGallery';

const MainContent = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col p-0">
      <Banner />
      <div className="flex items-center justify-between mb-8">
        <ProjectMenuNav />
        <SortButton />
      </div>
      <ProjectGallery />
    </div>
  );
};

export default MainContent;

