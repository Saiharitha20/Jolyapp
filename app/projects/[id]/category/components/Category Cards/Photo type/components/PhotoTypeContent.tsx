import Breadcrumbs from './Breadcrumbs';
import PhotoTypeGroups from './Photo TypeGroups';
import OtherPhotoTypes from './OtherPhoto Types';

// PhotoTypeContent.tsx

// PhotoTypeContent.tsx
export default function PhotoTypeContent() {
  return (
    <div className="w-[1176px] h-[104px] px-4 py-6">
      <Breadcrumbs />
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Photo type</h1>
          <p className="text-gray-600">353 photos • 4 groups</p>
        </div>
        {/* Optionally place a New Group button here, like your reference */}
      </div>
      <PhotoTypeGroups />
      <OtherPhotoTypes />
    </div>
  );
}
