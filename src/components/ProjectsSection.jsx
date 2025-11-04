import { Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Redesign Landing Page",
    total: 12,
    done: 5,
    members: [
      "https://i.pravatar.cc/100?img=8",
      "https://i.pravatar.cc/100?img=12",
      "https://i.pravatar.cc/100?img=18",
    ],
  },
  {
    id: 2,
    title: "Mobile App V1",
    total: 20,
    done: 11,
    members: [
      "https://i.pravatar.cc/100?img=25",
      "https://i.pravatar.cc/100?img=5",
      "https://i.pravatar.cc/100?img=31",
    ],
  },
  {
    id: 3,
    title: "Integrasi Payment",
    total: 8,
    done: 6,
    members: [
      "https://i.pravatar.cc/100?img=2",
      "https://i.pravatar.cc/100?img=29",
    ],
  },
];

const weeklyStats = [
  { label: "Sen", done: 6, late: 1 },
  { label: "Sel", done: 5, late: 2 },
  { label: "Rab", done: 7, late: 1 },
  { label: "Kam", done: 4, late: 3 },
  { label: "Jum", done: 8, late: 1 },
  { label: "Sab", done: 3, late: 2 },
  { label: "Min", done: 2, late: 1 },
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <section className="xl:col-span-2 space-y-4">
        <h3 className="text-base font-semibold text-gray-800">Proyek Aktif</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />)
          )}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-base font-semibold text-gray-800">Kinerja Mingguan</h3>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyStats.map((d) => (
              <div key={d.label} className="flex flex-col items-center gap-2 w-full">
                <div className="flex items-end gap-1 w-full">
                  <div
                    className="bg-emerald-500/90 rounded-md w-3 sm:w-4"
                    style={{ height: `${d.done * 10}%` }}
                    title={`Selesai: ${d.done}`}
                  />
                  <div
                    className="bg-red-500/90 rounded-md w-3 sm:w-4"
                    style={{ height: `${d.late * 10}%` }}
                    title={`Tertunda: ${d.late}`}
                  />
                </div>
                <span className="text-[11px] text-gray-500">{d.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-emerald-600">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Tugas Selesai
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
              Tugas Tertunda
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }) {
  const progress = Math.round((project.done / project.total) * 100);
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h4 className="font-semibold text-gray-800">{project.title}</h4>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Users size={14} />
          <span>{project.members.length}</span>
        </div>
      </div>
      <div className="text-sm text-gray-600 mb-3">
        {project.done}/{project.total} tugas
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 flex -space-x-2">
        {project.members.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="member"
            className="h-7 w-7 rounded-full ring-2 ring-white object-cover"
          />
        ))}
      </div>
    </div>
  );
}
