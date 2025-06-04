// components/LeftSidebar/SidebarLayout.tsx
import JolyIcon from './Jolyicon';
import Navbar from './Navbar';
import Trash from './Trash';


const SidebarLayout = ({ children }) => {
  return (
    <div className="w-[256px] h-full p-4 flex flex-col ">
      <JolyIcon />
      <Navbar />
      {children}
      <Trash />
    </div>
  );
};
export default SidebarLayout;
