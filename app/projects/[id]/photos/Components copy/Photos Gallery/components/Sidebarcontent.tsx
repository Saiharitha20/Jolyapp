import Image from "next/image";

export default function SidebarContent({ photo }: { photo: string }) {
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
        <span className="text-sm">Untitled</span>
      </div>
    </div>
  );
}
