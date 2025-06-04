'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { galleryItemsAtom } from '@/store/atoms';
import { useRouter } from 'next/navigation';
import { ProjectDropdownMenu } from './Projectgallerysection/Gallerycard/ProjectDropdownMenu';
import { RenameDialog } from './Projectgallerysection/Gallerycard/RenameDialog';

const ProjectGallery = () => {
  const [galleryItems, setGalleryItems] = useAtom(galleryItemsAtom);
  const [renameDialogIdx, setRenameDialogIdx] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const router = useRouter();

  const handleRenameClick = (idx: number) => {
    setRenameDialogIdx(idx);
    setRenameValue(galleryItems[idx].title);
  };

  const handleRenameDone = () => {
    if (renameValue.trim() && renameDialogIdx !== null) {
      const updated = [...galleryItems];
      updated[renameDialogIdx].title = renameValue.trim();
      setGalleryItems(updated);
    }
    setRenameDialogIdx(null);
    setRenameValue('');
  };

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className="relative">
      <div className={`${renameDialogIdx !== null ? "filter blur-sm pointer-events-none" : ""} grid grid-cols-3 gap-6`}>
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            className="relative bg-gray-50 rounded-2xl overflow-hidden p-4"
          >
            {/* Clickable area for project content */}
            <div 
              className="cursor-pointer"
              onClick={() => handleProjectClick(item.id)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={274}
                height={274}
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
            {/* Title/info and dropdown in a row under image */}
            <div className="pt-4 bg-transparent flex items-center justify-between">
              <div
                className="cursor-pointer"
                onClick={() => handleProjectClick(item.id)}
              >
                <h3 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.photoCount} photos • {item.albumCount} albums</p>
              </div>
              <ProjectDropdownMenu
                onOpenProject={() => handleProjectClick(item.id)}
                onRename={() => handleRenameClick(idx)}
                onMoveToTrash={() => alert('Move to Trash clicked!')}
              >
                <button
                  onClick={e => e.stopPropagation()}
                  className="ml-2"
                  type="button"
                >
                  <span className="text-2xl">⋯</span>
                </button>
              </ProjectDropdownMenu>
            </div>
          </div>
        ))}
      </div>
      
      <RenameDialog
        open={renameDialogIdx !== null}
        value={renameValue}
        onValueChange={setRenameValue}
        onDone={handleRenameDone}
        onCancel={() => setRenameDialogIdx(null)}
      />
    </div>
  )
};

export default ProjectGallery;
