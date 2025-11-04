import { useState } from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const initialTasks = [
  { id: 1, title: "Review PR fitur autentikasi", due: "09:00", done: false },
  { id: 2, title: "Rapat harian tim", due: "10:30", done: true },
  { id: 3, title: "Desain kartu proyek v2", due: "14:00", done: false },
  { id: 4, title: "Follow up klien A", due: "16:00", done: false },
];

export default function DailySummaryCard() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggle = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <section className="bg-cyan-50 border border-cyan-100 rounded-xl p-5 md:p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Tugas yang Harus Selesai Hari Ini</h2>
      <ul className="space-y-3">
        {tasks.slice(0, 5).map((task) => (
          <li key={task.id} className="flex items-center justify-between bg-white/70 rounded-lg p-3">
            <button
              onClick={() => toggle(task.id)}
              className="flex items-center gap-3 text-left group"
            >
              {task.done ? (
                <CheckCircle2 className="text-teal-600" size={18} />
              ) : (
                <Circle className="text-gray-400 group-hover:text-teal-500" size={18} />
              )}
              <span className={`text-sm ${task.done ? "line-through text-gray-400" : "text-gray-800"}`}>
                {task.title}
              </span>
            </button>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock size={14} />
              <span>{task.due}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
