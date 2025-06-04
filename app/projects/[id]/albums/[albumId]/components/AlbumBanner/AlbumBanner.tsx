'use client';

import { Album } from '@/types';
import AlbumTitle from './AlbumTitle';
import AlbumActions from './AlbumActions';

interface AlbumBannerProps {
  album: Album;
}

export default function AlbumBanner({ album }: AlbumBannerProps) {
  const handleMoreOptions = () => {
    console.log('More options clicked');
  };

  const handleDataFlow = () => {
    console.log('Data flow clicked');
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  return (
    <div className=" mb-6 ">
      <div className="flex justify-between items-start">
        <AlbumTitle name={album.name} photoCount={album.photoCount} />
        <AlbumActions 
          onMoreOptions={handleMoreOptions}
          onDataFlow={handleDataFlow}
          onShare={handleShare}
        />
      </div>
    </div>
  );
}
