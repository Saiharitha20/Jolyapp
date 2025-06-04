import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function TopRightActions({
  idx,
  setSelectedIndex,
}: {
  idx: number;
  setSelectedIndex: (idx: number) => void;
}) {
  return (
    <div className="absolute top-2 right-2 z-10">
      <div className="flex items-center bg-white rounded-xl px-2 py-1 shadow">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-900"
          style={{ background: "transparent" }}
          onClick={() => setSelectedIndex(idx)}
        >
          {/* Magnifier Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
            <rect x="4" y="4" width="16" height="16" rx="5" strokeWidth="1.2" />
            <circle cx="12" cy="12" r="5" strokeWidth="1.2" />
            <path d="M19 19l-4-4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-900"
              style={{ background: "transparent" }}
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center" className="bg-white rounded-2xl shadow-lg border flex p-2 gap-2">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-lg font-semibold rounded-xl py-3 px-3 hover:bg-gray-100"
              onClick={() => alert("Add to Album")}
            >
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="16" height="16" rx="5" />
                <path d="M12 9v6m-3-3h6" strokeLinecap="round" />
              </svg>
              Album
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-lg text-red-600 justify-end rounded-xl py-3 px-3 hover:bg-gray-100"
              onClick={() => alert("Delete")}
            >
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="16" height="16" rx="5" />
                <path d="M9 9l6 6M9 15l6-6" strokeLinecap="round" />
              </svg>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
