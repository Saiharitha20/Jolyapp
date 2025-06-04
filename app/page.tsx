'use client';

import ClientSidebar from '@/components/home/Leftsidebar/ClientSidebar';
import TopNav from '@/components/home/Rightsidebar/TopNav';
import MainContent from '@/components/home/Rightsidebar/MainContent';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <ClientSidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="sticky top-0 z-20 ">
          <TopNav />
        </div>
        {/* Main Content */}
        <div className="flex-1 overflow-auto px-6 py-8">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
