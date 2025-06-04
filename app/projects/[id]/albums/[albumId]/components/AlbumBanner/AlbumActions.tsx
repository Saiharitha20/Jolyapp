'use client';

import MoreOptionsButton from './MoreOptionsButton';
import DataFlowButton from './DataFlowButton';
import ShareButton from './ShareButton';

interface AlbumActionsProps {
  onMoreOptions?: () => void;
  onDataFlow?: () => void;
  onShare?: () => void;
}

export default function AlbumActions({ 
  onMoreOptions, 
  onDataFlow, 
  onShare 
}: AlbumActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <MoreOptionsButton onClick={onMoreOptions} />
      <DataFlowButton onClick={onDataFlow} />
      <ShareButton onClick={onShare} />
    </div>
  );
}
