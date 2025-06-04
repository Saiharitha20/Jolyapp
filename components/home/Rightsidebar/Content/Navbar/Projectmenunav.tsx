'use client';

import { useState } from 'react';

const ProjectMenuNav = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | null>('all');

  return (
    <div className="w-[1144px] h-8 flex items-center"> {/* Parent container */}
      <button
        className={`w-full h-full px-4 rounded-md text-sm flex items-center ${
          activeFilter === 'all' 
            ? 'bg-gray-100  text-gray-900' 
            : 'bg-transparent text-gray-900'
        } filter  hover:grayscale-0 transition-all`}
        onClick={() => setActiveFilter('all')}
      >
        All
      </button>
    </div>
  );
};

export default ProjectMenuNav;
