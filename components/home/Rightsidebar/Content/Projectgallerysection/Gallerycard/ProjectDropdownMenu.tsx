'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';

type ProjectDropdownMenuProps = {
  onOpenProject: () => void;
  onRename: () => void;
  onMoveToTrash: () => void;
  children: ReactNode;
}

export const ProjectDropdownMenu = ({
  onOpenProject,
  onRename,
  onMoveToTrash,
  children,
}: ProjectDropdownMenuProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      {children}
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuItem onSelect={onOpenProject}>Open project</DropdownMenuItem>
      <DropdownMenuItem onSelect={onRename}>Rename</DropdownMenuItem>
      <DropdownMenuItem onSelect={onMoveToTrash} className="text-red-500">Move to Trash</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
