import PhotosGrid from "@/app/projects/[id]/search/components/search/photosgrid";
import SearchInput from "@/app/projects/[id]/search/components/search/searchinput";
import SearchMenu from "@/app/projects/[id]/search/components/search/searchmenu";

export default function Search({ params }: { params: { id: string } }) {
  return (
    <div className="w-full h-screen bg-gray-50 p-4">
      {/* Search input at the top */}
      <div className="mb-4">
        <SearchInput />
      </div>

      {/* Content area with sidebar and photos grid */}
      <div className="flex">
        {/* Sidebar menu on the left */}
        <div className="w-64 pr-4">
          <SearchMenu />
        </div>

        {/* Photos grid on the right */}
        <div className="flex-1">
          <PhotosGrid />
        </div>
      </div>
    </div>
  );
}
