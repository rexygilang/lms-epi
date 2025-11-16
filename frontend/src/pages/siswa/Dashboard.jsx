import {React, useEffect} from "react";
import UmumDashboard from "../umum/UmumDashboard";
import UmumNavbar from "../../components/NavbarGuru";

export default function Dashboard() {
  return (
    useEffect(() => {
      document.title = "Learning Management System | EPI";
    }, [UmumNavbar])
  )

  // const [sidebarOpen, setSidebarOpen] = useState(false); // track sidebar state
  //   <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  //     <h1 className="text-4xl font-bold text-blue-600">Halaman Dashboard Siswa</h1>
  //     <p className="text-gray-700 mt-4">Tailwind CSS sudah aktifF 🚀</p>
  //   </div>
  // );
}
