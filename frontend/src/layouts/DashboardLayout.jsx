export default function DashboardLayout({ children, title }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-4">
        <h2 className="text-xl font-bold mb-4">LMS</h2>
        <ul className="space-y-2">
          <li><a href="#" className="block hover:bg-blue-600 p-2 rounded">Db</a></li>
          <li><a href="#" className="block hover:bg-blue-600 p-2 rounded">Kelas</a></li>
          <li><a href="#" className="block hover:bg-blue-600 p-2 rounded">Tugas</a></li>
        </ul>
      </aside>

      {/* Konten utama */}
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        {children}
      </main>
    </div>
  );
}
