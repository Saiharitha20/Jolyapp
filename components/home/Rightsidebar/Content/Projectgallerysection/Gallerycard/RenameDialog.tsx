'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type RenameDialogProps = {
  open: boolean;
  value: string;
  onValueChange: (value: string) => void;
  onDone: () => void;
  onCancel: () => void;
};

export const RenameDialog = ({
  open,
  value,
  onValueChange,
  onDone,
  onCancel,
}: RenameDialogProps) => (
  <Dialog open={open} onOpenChange={onCancel}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Rename Project</DialogTitle>
      </DialogHeader>
      <input
        value={value}
        onChange={e => onValueChange(e.target.value)}
        className="border rounded w-full p-2 mb-4"
        autoFocus
      />
      <div className="flex justify-end space-x-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >Cancel</button>
        <button
          onClick={onDone}
          className="px-4 py-2 rounded bg-black text-white hover:bg-gray-900"
        >Done</button>
      </div>
    </DialogContent>
  </Dialog>
);
