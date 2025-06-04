'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import SidebarContent from './Sidebarcontent';
import AddToAlbumDialog from './Addtoalbum/AddToAlbumDialog';

export default function ModalPhotoViewer({
  photo,
  zoom,
  setZoom, 
  onClose,
}: {
  photo: string | null;
  zoom: number;
  setZoom: (zoom: number) => void;
  onClose: () => void;
}) {
  const [albumDialogOpen, setAlbumDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'select' | 'create'>('select');

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white flex items-center px-6 z-10 border-b">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Button>
        <span className="text-base font-medium ml-4 text-gray-800">File name</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="ml-auto"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="absolute left-1/2 top-7 -translate-x-1/2 z-30">
        <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg border px-4 py-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-lg border"
            onClick={() => {
              setDialogMode('select');
              setAlbumDialogOpen(true);
            }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <path d="M12 8v8M8 12h8" strokeLinecap="round" />
            </svg>
            Album
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 rounded-xl text-red-600 border"
            onClick={() => alert('Delete')}
            title="Delete"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <path d="M9 9l6 6M9 15l6-6" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="absolute top-20 left-6 w-[240px] bg-white rounded-xl shadow-md p-4 z-10">
        <SidebarContent photo={photo} />
      </div>

      {/* Main Image */}
      <div className="flex items-center justify-center h-screen relative">
        <Image
          src={photo}
          alt="Selected photo"
          width={1000}
          height={800}
          style={{
            maxHeight: "80vh",
            maxWidth: "90vw",
            transform: `scale(${zoom})`,
            transition: "transform 0.2s",
          }}
          className="object-contain rounded-lg shadow max-h-[80vh] max-w-full"
          priority
        />
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-6 right-6 z-30">
        <div className="bg-white p-2 rounded-xl shadow flex items-center gap-1 border">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-md"
            title="Fit to screen"
            onClick={() => setZoom(0.8)}
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-md"
            aria-label="Zoom out"
            onClick={() => setZoom(Math.max(0.2, zoom - 0.2))}
          >
            <span className="font-bold text-xl leading-none">−</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-md px-4 min-w-[64px] flex justify-between"
              >
                {`${Math.round(zoom * 100)}%`}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-32">
              <DropdownMenuItem onClick={() => setZoom(2)}>200%</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(1)}>100%</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(0.5)}>50%</DropdownMenuItem>
              <div className="border-t my-1" />
              <DropdownMenuItem onClick={() => setZoom(0.8)}>Fit</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(1.1)}>Fill</DropdownMenuItem>
              <div className="border-t my-1" />
              <DropdownMenuItem onClick={() => setZoom(Math.min(2, zoom + 0.2))}>Zoom in</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setZoom(Math.max(0.2, zoom - 0.2))}>Zoom out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-md"
            aria-label="Zoom in"
            onClick={() => setZoom(Math.min(2, zoom + 0.2))}
          >
            <span className="font-bold text-xl leading-none">+</span>
          </Button>
        </div>
      </div>

      {/* Album Dialog */}
      <AddToAlbumDialog
        open={albumDialogOpen}
        mode={dialogMode}
        onOpenChange={setAlbumDialogOpen}
        onModeChange={setDialogMode}
        photo={photo}
      />
    </div>
  );
}
