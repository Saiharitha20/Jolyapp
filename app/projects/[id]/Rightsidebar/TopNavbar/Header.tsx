'use client';

import Search from './Search';
import Messages from './Messages';
import Profile from './Profile';

interface HeaderProps {
  projectId: string;
}

export default function Header({ projectId }: HeaderProps) {
  return (
    <div className="h-16 relative flex items-center justify-between px-4 border-b ">
      {/* Left Section */}
      <div className="flex items-center">
        <h1 className="text-lg font-medium"> {/* Optional title or left content */} </h1>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-end h-16 px-4 border-b bg-white ml-auto">
  {/* Search input with fixed width */}
  <div className="w-[500px]">
    <Search projectId={projectId} />
  </div>
  </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Messages />
        <Profile />
      </div>
    </div>
  );
}
