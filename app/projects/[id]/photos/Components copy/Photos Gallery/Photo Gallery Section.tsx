import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import AddToAlbumDialog from './components/Addtoalbum/AddToAlbumDialog'; // Import your dialog

interface PhotoGallerySectionProps {
  photos: string[];
}

const CATEGORY = "Untitled";

export default function PhotoGallerySection({ photos }: PhotoGallerySectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  // State for opening the dialog
  const [albumDialogOpen, setAlbumDialogOpen] = useState(false);
  const [albumDialogMode, setAlbumDialogMode] = useState<'select' | 'create'>('select');

  return (
    <>
      {/* ---------- PHOTO GRID ---------- */}
      <div className="grid grid-cols-5 gap-4 w-full bg-gray-100 p-4">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="relative w-[216px] h-[216px] rounded-2xl overflow-hidden"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={photo}
              alt={`Photo ${idx + 1}`}
              width={216}
              height={216}
              className="w-full h-full object-cover bg-gray-300"
            />
            {hoveredIndex === idx && (
              <div className="absolute top-2 right-2 z-10">
                <div className="flex items-center bg-white rounded-xl px-2 py-1 shadow">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-900"
                    style={{ background: 'transparent' }}
                    onClick={() => setSelectedIndex(idx)}
                  >
                    {/* Magnifier Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <rect x="4" y="4" width="16" height="16" rx="5" strokeWidth="1.2"/>
                      <circle cx="12" cy="12" r="5" strokeWidth="1.2"/>
                      <path d="M19 19l-4-4" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </Button>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-gray-900"
                        style={{ background: 'transparent' }}
                        aria-label="Open menu"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                          <circle cx="5" cy="12" r="1.5" />
                          <circle cx="12" cy="12" r="1.5" />
                          <circle cx="19" cy="12" r="1.5" />
                        </svg>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="center" className="bg-white rounded-2xl shadow-lg border flex p-2 gap-2">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-lg font-semibold rounded-xl py-3 px-3 hover:bg-gray-100"
                        onClick={() => {
                          // You can also open the dialog from here if you want
                          setSelectedIndex(idx);
                          setAlbumDialogMode('select');
                          setAlbumDialogOpen(true);
                        }}
                      >
                        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="16" height="16" rx="5" /><path d="M12 9v6m-3-3h6" strokeLinecap="round"/></svg>
                        Album
                      </Button>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-lg text-red-600 justify-end rounded-xl py-3 px-3 hover:bg-gray-100"
                        onClick={() => alert("Delete")}
                      >
                        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="16" height="16" rx="5" /><path d="M9 9l6 6M9 15l6-6" strokeLinecap="round"/></svg>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            )}
            <div className="absolute bottom-2 right-2">
              <input type="checkbox" className="w-4 h-4 rounded-md bg-white" />
            </div>
          </div>
        ))}
      </div>

      {/* ------ MODAL FULL VIEW ------ */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-white flex items-center px-6 z-10 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedIndex(null)}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Button>
            <span className="text-base font-medium ml-4 text-gray-800">File name</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedIndex(null)}
              className="ml-auto"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          {/* --- Centered Album & Delete Pill --- */}
          <div className="absolute left-1/2 top-7 -translate-x-1/2 z-30">
            <div className="flex items-center gap-2 bg-white rounded-2xl shadow-lg border px-4 py-2">
              <Button
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-lg border"
                onClick={() => {
                  setAlbumDialogMode('select');
                  setAlbumDialogOpen(true);
                }}
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <path d="M12 8v8M8 12h8" strokeLinecap="round"/>
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
                  <path d="M9 9l6 6M9 15l6-6" strokeLinecap="round"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Always-visible sidebar */}
          <div className="absolute top-20 left-6 w-[240px] bg-white rounded-xl shadow-md p-4 z-10">
            <SidebarContent photo={photos[selectedIndex]} />
          </div>

          {/* Main image and zoom controls */}
          <div className="flex items-center justify-center h-screen relative">
            <Image
              src={photos[selectedIndex]}
              alt={`Photo ${selectedIndex + 1}`}
              width={1000}
              height={800}
              style={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                transform: `scale(${zoom})`,
                transition: "transform 0.2s",
              }}
              className="object-contain rounded-lg shadow max-h-[80vh] max-w-full"
            />
          </div>

          {/* ------- BOTTOM-RIGHT ZOOM BAR ------- */}
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
                  <DropdownMenuItem asChild>
                    <div><hr className="my-1" /></div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setZoom(0.8)}>Fit</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setZoom(1.1)}>Fill</DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div><hr className="my-1" /></div>
                  </DropdownMenuItem>
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

          {/* --- AddToAlbumDialog: THIS IS WHERE IT IS ADDED! --- */}
          <AddToAlbumDialog
            open={albumDialogOpen}
            mode={albumDialogMode}
            onOpenChange={setAlbumDialogOpen}
            onModeChange={setAlbumDialogMode}
            photo={photos[selectedIndex]}
          />
        </div>
      )}
    </>
  );
}

// SidebarContent same as your existing code
function SidebarContent({ photo }: { photo: string }) {
  return (
    <div>
      <div className="font-medium text-sm mb-2">Similar photos</div>
      <div className="flex gap-2 mb-5">
        {[0, 1].map((i) => (
          <div key={i} className="w-[60px] h-[60px] rounded-lg overflow-hidden bg-gray-200">
            <Image src={photo} alt={`Similar ${i}`} width={60} height={60} className="object-cover" />
          </div>
        ))}
      </div>
      <div className="font-medium text-sm mb-2">People</div>
      <div className="mb-5">
        <div className="w-[60px] h-[60px] rounded-lg overflow-hidden bg-gray-200">
          <Image src={photo} alt="Person" width={60} height={60} className="object-cover" />
        </div>
      </div>
      <div className="font-medium text-sm mb-2">Category</div>
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-xs font-medium text-rose-800">A</span>
        <span className="text-sm">{CATEGORY}</span>
      </div>
    </div>
  );
}
