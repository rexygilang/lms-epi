import { useState } from "react";
import UmumNavbar from "../../components/NavbarUmum";
import { User, Lock } from "lucide-react";

export default function UmumDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // track sidebar state

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6472a6] to-[#7b90bd] text-white">
      {/* Sidebar Navbar */}
      <UmumNavbar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Container utama */}
      <div
        className={`transition-all duration-300 p-8`}
        style={{ marginLeft: sidebarOpen ? "16rem" : "0" }} // geser konten sesuai sidebar
      >
        {/* Kotak konten utama */}
        <div className="bg-white rounded-lg p-8 space-y-6 shadow-lg text-[#191970]">
          {/* Header login */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold">Learning Management System</div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center bg-white/10 rounded-md px-3 py-2 border">
                <User className="mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Email/Username"
                  className="bg-transparent placeholder-[#191970] focus:outline-none text-[#191970]"
                />
              </div>
              <div className="flex items-center bg-white/10 rounded-md px-3 py-2 border">
                <Lock className="mr-2" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent placeholder-[#191970] focus:outline-none text-[#191970]"
                />
              </div>
            </div>
          </div>

          {/* Garis HR */}
          <hr className="border-t border-[#191970]" />

              {/* Navbar bawah header */}
              <div className="flex items-center font-medium bg-[#191970] text-[#ffffff] rounded-md px-4 py-2">
                <a href="#" className="px-4 hover:text-blue-400 hover:underline">Patriortik</a>
                <div className="border-l border-gray-300 h-6"></div> {/* garis pemisah */}
                <a href="#" className="px-4 hover:text-blue-400 hover:underline">Contact</a>
              </div>

                    {/* Konten horizontal scroll (LMS info) */}
                    {/* Konten horizontal scroll (LMS info) */}
          <div className="flex space-x-6 overflow-x-auto mt-6 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {/* Item 1 */}
            <div className="min-w-[250px] bg-white rounded-md shadow-md flex-shrink-0">
              <img 
                src="/images/bimbel.jpg" 
                alt="Tempat Bimbel" 
                className="w-full h-32 object-cover rounded-t-md"
              />
              <div className="p-4 text-[#191970]">
                <h3 className="font-semibold text-lg mb-2">Tempat Bimbel</h3>
                <p className="text-sm">
                  Lokasi bimbel nyaman dan strategis untuk semua siswa.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="min-w-[250px] bg-white rounded-md shadow-md flex-shrink-0">
              <img 
                src="/images/lms.jpg" 
                alt="Apa itu LMS" 
                className="w-full h-32 object-cover rounded-t-md"
              />
              <div className="p-4 text-[#191970]">
                <h3 className="font-semibold text-lg mb-2">Apa itu LMS?</h3>
                <p className="text-sm">
                  Learning Management System untuk mengakses materi belajar secara online.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="min-w-[250px] bg-white rounded-md shadow-md flex-shrink-0">
              <img 
                src="/images/cara.jpg" 
                alt="Cara Menggunakan LMS" 
                className="w-full h-32 object-cover rounded-t-md"
              />
              <div className="p-4 text-[#191970]">
                <h3 className="font-semibold text-lg mb-2">Cara Menggunakan LMS</h3>
                <p className="text-sm">
                  Login, pilih kategori, dan mulai eksplorasi materi. Scroll kanan-kiri untuk lihat semua konten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
