import DashboardLayout from "../../layouts/DashboardLayout";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Guru", value: 10, color: "bg-blue-100" },
    { title: "Total Siswa", value: 45, color: "bg-green-100" },
    { title: "Total Kelas", value: 6, color: "bg-yellow-100" },
  ];

  return (
    <DashboardLayout title="Dashboard Admin">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} p-4 rounded shadow text-center`}>
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
