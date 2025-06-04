import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TopRightActions from "./TopRightActions";

interface PhotoGridProps {
  photos: string[];
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
  setSelectedIndex: (idx: number) => void;
}

export default function PhotoGrid({
  photos,
  hoveredIndex,
  setHoveredIndex,
  setSelectedIndex,
}: PhotoGridProps) {
  return (
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
            <TopRightActions idx={idx} setSelectedIndex={setSelectedIndex} />
          )}
          <div className="absolute bottom-2 right-2">
            <input type="checkbox" className="w-4 h-4 rounded-md bg-white" />
          </div>
        </div>
      ))}
    </div>
  );
}
