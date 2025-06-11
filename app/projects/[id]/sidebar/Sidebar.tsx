'use client';
// components/sidebar/Sidebar.tsx
import Link from 'next/link';
import Image from 'next/image';
import SidebarContainer from './SidebarContainer';
import SidebarLogo from './SidebarLogo';
import SidebarNavItem from './SidebarNavItem';
import SidebarSection from './SidebarSection';

interface SidebarProps {
  projectId: string;
  projectName: string;
  activePage?: string;
}

export default function Sidebar({ projectId, projectName }: SidebarProps) {
  console.log('Link path:', `/projects/${projectId}/albums/dog-park`);
  
  return (
    <SidebarContainer>
      <SidebarLogo />
      
      <SidebarSection>
        <Link 
          href="/" 
          className=" flex items-center gap-5 py-2 px-3  w-[224px] h-[40px]  text-gray-900  text-sm no-underline"
        >
          
          <Image 
            src="/Project-icons/arrow left.svg" 
            alt="Back" 
            width={8} 
            height={13} 
          />
             Home
        </Link>
        
        <SidebarNavItem 
          href={`/projects/${projectId}`}
          icon="label"
          label={projectName}
        />
        
        <SidebarNavItem 
          href={`/projects/${projectId}/photos`}
          icon="photos"
          label="Photos"
        />
      </SidebarSection>
      
      <SidebarSection title="Collections">
        <SidebarNavItem 
          href={`/projects/${projectId}/people`}
          icon="people"
          label="People"
        />
        
        <SidebarNavItem 
          href={`/projects/${projectId}/category`}
          icon="categories"
          label="Categories"
        />
      </SidebarSection>
      
      <SidebarSection title={
        <Link href={`/projects/${projectId}/albums`} className="hover:text-gray-700">
          Albums
        </Link>
      }>
        <SidebarNavItem 
          href={`/projects/${projectId}/albums/dog-park`}
          icon="dog park"
          label="Dog park"
          onClick={(e) => {
            console.log('Dog park link clicked, navigating to:', `/projects/${projectId}/albums/dog-park`);
          }}
        />
        
        <SidebarNavItem 
          href="#"
          icon="label"
          label="Label"
        />
        
        <SidebarNavItem 
          href="#"
          icon="label"
          label="Label"
        />
      </SidebarSection>
      
      <div className="flex flex-col gap-3 mt-auto">
        <SidebarNavItem 
          href={`/projects/${projectId}/settings`}
          icon="settings"
          label="Settings"
        />
        
        <SidebarNavItem 
          href={`/projects/${projectId}/trash`}
          icon="trash"
          label="Trash"
        />
      </div>
    </SidebarContainer>
    
  );
}
