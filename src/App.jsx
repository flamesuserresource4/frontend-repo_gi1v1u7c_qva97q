import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import DailySummaryCard from "./components/DailySummaryCard";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen flex flex-col">
          <TopHeader />

          <main className="px-4 md:px-8 py-6 space-y-6">
            {/* Ringkasan Tugas Harian */}
            <DailySummaryCard />

            {/* Proyek & Statistik */}
            <ProjectsSection />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
