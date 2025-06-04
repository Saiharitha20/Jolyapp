export default function PhotoTypeCard({ title, img, photoCount }) {
    return (
      <div className="rounded-xl bg-white shadow-sm flex flex-col overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-[120px] object-cover"
        />
        <div className="p-3">
          <div className="text-base font-medium">{title}</div>
          <div className="text-xs text-gray-500">{photoCount} photos</div>
        </div>
      </div>
    );
  }
  