export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r min-h-screen p-5 space-y-4">
      <div className="text-gray-700 font-semibold text-lg mb-6">Menu</div>
      <div className="cursor-pointer hover:text-indigo-600">Dashboard</div>
      <div className="cursor-pointer hover:text-indigo-600">Match Face</div>
      <div className="cursor-pointer hover:text-indigo-600">History</div>
      <div className="cursor-pointer hover:text-indigo-600">Settings</div>
    </aside>
  );
}
