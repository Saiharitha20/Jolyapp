'use client';

import { useParams } from 'next/navigation';
import { useAtom } from 'jotai';
import { projectsAtom } from '@/store/atoms';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectLayout from '@/app/projects/[id]/layout/ProjectLayout';
import Sidebar from '@/app/projects/[id]/sidebar/Sidebar';
import Header from '@/app/projects/[id]/Rightsidebar/TopNavbar/Header';
import { ChevronLeft, MoreHorizontal, Copy, Download, Filter, List, Grid3X3, Move, Plus, X, ArrowLeft } from 'lucide-react';
import { Project } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CandidDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const [projects] = useAtom(projectsAtom);
  const [project, setProject] = useState<Project | null>(null);
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);
  const [showMoveDialog, setShowMoveDialog] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projectId, projects]);

  // Photos in Candid category
  const candidPhotos = [
    '/Project-icons/photo1.svg',
    '/Project-icons/photo2.svg',
    '/Project-icons/photo3.svg',
    '/Project-icons/photo4.svg',
    '/Project-icons/photo5.svg',
    '/Project-icons/photo1.svg',
  ];

  // Available groups with proper icons
  const availableGroups = [
    { 
      id: 'landscape', 
      name: 'Landscape', 
      icon: (
        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
        </svg>
      ),
      color: 'bg-green-100' 
    },
    { 
      id: 'panarama', 
      name: 'Panarama', 
      icon: (
        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
        </svg>
      ),
      color: 'bg-blue-100' 
    },
    { 
      id: 'portrait', 
      name: 'Portrait', 
      icon: (
        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM8 14a6 6 0 00-6 6h16a6 6 0 00-6-6H8z"/>
        </svg>
      ),
      color: 'bg-purple-100' 
    },
    { 
      id: 'other', 
      name: 'Other', 
      icon: (
        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
        </svg>
      ),
      color: 'bg-gray-100' 
    }
  ];

  const togglePhotoSelection = (index: number) => {
    setSelectedPhotos(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const selectAllPhotos = () => {
    setSelectedPhotos(candidPhotos.map((_, index) => index));
  };

  const clearSelection = () => {
    setSelectedPhotos([]);
  };

  const handleMoveToGroup = (groupId: string) => {
    console.log(`Moving ${selectedPhotos.length} photos to ${groupId}`);
    setShowMoveDialog(false);
    clearSelection();
  };

  const handleCreateNewGroup = () => {
    if (!newGroupName.trim()) return;
    console.log(`Creating new group: ${newGroupName} with ${selectedPhotos.length} photos`);
    setShowCreateDialog(false);
    setShowMoveDialog(false);
    setNewGroupName('');
    setNewGroupDescription('');
    clearSelection();
  };

  const handleRemoveFromCategory = () => {
    console.log(`Removing ${selectedPhotos.length} photos from category`);
    setShowRemoveDialog(false);
    clearSelection();
  };

  if (!project) {
    return <div className="flex h-screen items-center justify-center">Loading project...</div>;
  }

  return (
    <ProjectLayout>
      <div className="flex h-screen">
        <Sidebar projectId={projectId} projectName={project.name} activePage="categories" />
        <div className="flex-1 flex flex-col">
          <Header projectId={projectId} />
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-6">
                <Link 
                  href={`/projects/${projectId}/category`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Categories
                </Link>
                <span className="text-gray-400">›</span>
                <span className="text-gray-600">Photo type</span>
                <span className="text-gray-400">›</span>
                <span className="text-gray-900 font-medium">Candid</span>
              </nav>

              {/* Page Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-semibold mb-1">Candid</h1>
                  <p className="text-gray-500">353 photos</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Copy className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </div>

              {/* Gallery Controls */}
              <div className="flex items-center justify-between mb-6">
                <div></div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Filter className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <List className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-lg">
                    <Grid3X3 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-5 gap-4 mb-8">
                {candidPhotos.map((photo, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => togglePhotoSelection(index)}
                  >
                    <div className={`w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 transition-all duration-200 ${
                      selectedPhotos.includes(index) 
                        ? 'ring-2 ring-blue-500 ring-offset-2' 
                        : 'hover:shadow-lg group-hover:scale-105'
                    }`}>
                      <Image
                        src={photo}
                        alt={`Candid photo ${index + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Selection overlay with checkmark in bottom-right */}
                    <div className={`absolute inset-0 bg-black bg-opacity-30 rounded-2xl transition-opacity ${
                      selectedPhotos.includes(index) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <div className="absolute bottom-2 right-2">
                        <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${
                          selectedPhotos.includes(index) ? 'bg-blue-500' : 'bg-black bg-opacity-50'
                        }`}>
                          {selectedPhotos.includes(index) && (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Selection Bar */}
          {selectedPhotos.length > 0 && (
            <div className="border-t bg-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-medium">{selectedPhotos.length} Selected</span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Move Dialog - FIXED: No duplicate close button */}
                <Dialog open={showMoveDialog} onOpenChange={setShowMoveDialog}>
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                      <Move className="w-4 h-4" />
                      Move
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-white p-6 rounded-2xl">
                    {/* SINGLE HEADER with just title - no manual close button */}
                    <DialogHeader className="pb-4">
                      <DialogTitle className="text-lg font-semibold text-gray-900">Move to group</DialogTitle>
                    </DialogHeader>
                    
                    <div className="flex gap-8">
                      <div className="flex-shrink-0">
                        <div className="grid grid-cols-3 gap-2 w-60">
                          {selectedPhotos.slice(0, 9).map(index => (
                            <div key={index} className="w-18 h-18 rounded-lg overflow-hidden">
                              <Image
                                src={candidPhotos[index]}
                                alt={`Selected ${index}`}
                                width={72}
                                height={72}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="relative">
                          <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <Input 
                            placeholder="Search" 
                            className="w-full h-10 pl-10 pr-4 border-gray-200 rounded-lg bg-white"
                          />
                        </div>

                        <div className="space-y-1">
                          {availableGroups.map(group => (
                            <button
                              key={group.id}
                              onClick={() => handleMoveToGroup(group.id)}
                              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg text-left transition-colors"
                            >
                              <div className={`w-8 h-8 ${group.color} rounded-lg flex items-center justify-center`}>
                                {group.icon}
                              </div>
                              <span className="font-medium text-gray-900">{group.name}</span>
                            </button>
                          ))}
                        </div>

                        <div className="border-t pt-3 mt-4">
                          <button
                            onClick={() => {
                              setShowMoveDialog(false);
                              setShowCreateDialog(true);
                            }}
                            className="w-full p-3 text-left hover:bg-gray-50 rounded-lg font-medium text-gray-900 transition-colors"
                          >
                            Create album
                          </button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Group Button */}
                <button 
                  onClick={() => setShowCreateDialog(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <Plus className="w-4 h-4" />
                  Group
                </button>

                {/* Remove Dialog - FIXED: No duplicate close button */}
                <Dialog open={showRemoveDialog} onOpenChange={setShowRemoveDialog}>
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                      Remove
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-white p-6 rounded-2xl">
                    {/* SINGLE HEADER with just title - no manual close button */}
                    <DialogHeader className="pb-4">
                      <DialogTitle className="text-lg font-semibold text-gray-900">Remove photos from category</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <p className="text-gray-600">Remove selected photos from group</p>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {selectedPhotos.slice(0, 9).map(index => (
                          <div key={index} className="w-20 h-20 rounded-lg overflow-hidden">
                            <Image
                              src={candidPhotos[index]}
                              alt={`Selected ${index}`}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button 
                          onClick={handleRemoveFromCategory}
                          className="flex-1 h-10 bg-red-600 text-white hover:bg-red-700 rounded-lg font-medium"
                        >
                          Remove from Category
                        </Button>
                        <Button 
                          onClick={() => setShowRemoveDialog(false)}
                          variant="outline"
                          className="flex-1 h-10 rounded-lg font-medium"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <button onClick={selectAllPhotos} className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  Select all
                </button>

                <button onClick={clearSelection} className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Create New Group Dialog - FIXED: No duplicate close button */}
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogContent className="max-w-3xl bg-white p-6 rounded-2xl">
              <DialogHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => {
                      setShowCreateDialog(false);
                      setShowMoveDialog(true);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <DialogTitle className="text-lg font-semibold text-gray-900">Create group</DialogTitle>
                </div>
                {/* REMOVED: Manual close button - Shadcn provides its own */}
              </DialogHeader>
              
              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-3 gap-2 w-60">
                    {selectedPhotos.slice(0, 9).map(index => (
                      <div key={index} className="w-18 h-18 rounded-lg overflow-hidden">
                        <Image
                          src={candidPhotos[index]}
                          alt={`Selected ${index}`}
                          width={72}
                          height={72}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      value={newGroupName}
                      onChange={(e) => setNewGroupName(e.target.value)}
                      placeholder="Lenny birthday"
                      className="w-full h-10 px-4 border-gray-200 rounded-lg bg-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <Input
                      value={newGroupDescription}
                      onChange={(e) => setNewGroupDescription(e.target.value)}
                      placeholder="Add description..."
                      className="w-full h-10 px-4 border-gray-200 rounded-lg bg-white"
                    />
                  </div>

                  <Button 
                    onClick={handleCreateNewGroup}
                    className="w-full h-10 bg-black text-white hover:bg-gray-800 rounded-lg font-medium mt-6"
                    disabled={!newGroupName.trim()}
                  >
                    Move to group
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </ProjectLayout>
  );
}
