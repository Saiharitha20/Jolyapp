'use client';
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogPortal, // Added DialogPortal
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

interface AddToAlbumDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'select' | 'create';
  onModeChange: (mode: 'select' | 'create') => void;
  photo: string;
}

const DUMMY_ALBUMS = [
  { id: 1, name: "Vacation", avatar: "/default-album.png" },
  { id: 2, name: "Family", avatar: "/default-album.png" },
  { id: 3, name: "Friends", avatar: "/default-album.png" },
  { id: 4, name: "Work", avatar: "/default-album.png" },
  { id: 5, name: "Favorites", avatar: "/default-album.png" }
];

export default function AddToAlbumDialog({
  open,
  onOpenChange,
  mode,
  onModeChange,
  photo,
}: AddToAlbumDialogProps) {
  const [search, setSearch] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumDesc, setAlbumDesc] = useState("");

  const handleCreateAlbum = () => {
    // Add your album creation logic here
    console.log("Creating album:", { albumName, albumDesc });
    onOpenChange(false);
  };

  const handleAddToAlbum = () => {
    // Add your album selection logic here
    console.log("Adding to album");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal> {/* Wrap content in DialogPortal */}
        <DialogContent className="p-0 max-w-xl bg-white z-[100]"> {/* Increased z-index */}
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>
              {mode === "select" ? "Add to album" : "Create album"}
            </DialogTitle>
          </DialogHeader>
          
          <DialogClose className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
            <span className="text-2xl">×</span>
          </DialogClose>

          <div className="flex gap-6 px-6 pb-6 pt-2">
            {/* Left: Photo Preview */}
            <div className="w-48 h-48 flex-shrink-0 rounded-xl bg-gray-100 relative overflow-hidden">
              <Image
                fill
                src={photo}
                alt="Selected photo"
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-1 flex-col gap-3 min-w-0">
              {mode === "select" ? (
                <>
                  <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search albums"
                    className="mb-2"
                  />
                  
                  <div className="flex flex-col gap-1 max-h-44 overflow-auto">
                    {DUMMY_ALBUMS
                      .filter(album => 
                        album.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((album) => (
                        <label 
                          key={album.id} 
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-md overflow-hidden bg-gray-200">
                            <Image
                              src={album.avatar}
                              alt={album.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <span className="flex-1 truncate">{album.name}</span>
                          <Checkbox />
                        </label>
                      ))}
                  </div>

                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() => onModeChange('create')}
                  >
                    Create New Album
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Album Name
                      </label>
                      <Input
                        value={albumName}
                        onChange={(e) => setAlbumName(e.target.value)}
                        placeholder="Enter album name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Description (optional)
                      </label>
                      <Input
                        value={albumDesc}
                        onChange={(e) => setAlbumDesc(e.target.value)}
                        placeholder="Add a description"
                      />
                    </div>

                    <Button 
                      className="w-full mt-4" 
                      onClick={handleCreateAlbum}
                    >
                      Create Album
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
