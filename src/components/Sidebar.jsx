import { Home, Folder, List, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-gray-100 border-r border-gray-200 min-h-screen p-4">
      <div className="text-2xl font-bold tracking-tight text-gray-800 mb-8">SimpleTask</div>

      <nav className="space-y-1 text-gray-700">
        <NavItem icon={<Home size={18} />} label="Dashboard" active />
        <NavItem icon={<Folder size={18} />} label="Proyek Saya" badge={3} />
        <NavItem icon={<List size={18} />} label="Semua Tugas" />
        <NavItem icon={<Settings size={18} />} label="Pengaturan" />
      </nav>

      <div className="mt-auto pt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} SimpleTask
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false, badge }) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer select-none transition-colors ${
        active ? "bg-white shadow-sm text-gray-900" : "hover:bg-white/70"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`shrink-0 ${active ? "text-teal-600" : "text-gray-600"}`}>{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      {typeof badge === "number" && (
        <span className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-teal-500 px-1.5 text-xs font-semibold text-white">
          {badge}
        </span>
      )}
    </div>
  );
}
