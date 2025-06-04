import Messages from './TopNav/Messages';
import NewProjectButton from './TopNav/NewProjectButton';
import Profile from './TopNav/Profile';

const TopNav = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center   px-8">
      <div>{/* Left-side elements */}</div>
      <div className="flex items-center gap-6">
        <Messages />
        <NewProjectButton />
        <Profile />
      </div>
    </div>
  );
};
export default TopNav;

