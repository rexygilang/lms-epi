import GuruNavbar from "../../components/NavbarGuru";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";

export default function GuruDashboard() {
  useEffect(() => {
      document.title = "Learning Management System | EPI";
    }, []);

    const [sidebarOpen, setSidebarOpen] = useState(false); // track sidebar state


  return (
    <div className="min-h-screen bg-sky-100 text-white">
      <GuruNavbar open={sidebarOpen} setOpen={setSidebarOpen} />
       
      {/* Container utama */}
      <div
        className={`transition-all duration-300 p-8`}
        style={{ marginLeft: sidebarOpen ? "16rem" : "0" }} // geser konten sesuai sidebar
      >
    <div className="bg-white p-4 rounded shadow">Daftar kelas Anda</div>
    </div>
    </div>
  );
}
