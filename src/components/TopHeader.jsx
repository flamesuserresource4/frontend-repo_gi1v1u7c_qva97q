import { Bell, Search } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="md:hidden text-lg font-semibold">SimpleTask</div>
        <div className="hidden md:block" />
        <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari Proyek/Tugas..."
              className="w-full md:w-[360px] rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <button className="relative inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-gray-100 transition-colors">
            <Bell size={18} className="text-gray-600" />
            <span className="absolute right-2 top-2 inline-block h-2 w-2 rounded-full bg-red-500" />
          </button>
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="Profil"
            className="h-9 w-9 rounded-full object-cover border border-gray-200"
          />
        </div>
      </div>
    </header>
  );
}
