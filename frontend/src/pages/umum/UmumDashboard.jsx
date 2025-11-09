import { useState } from "react";
import UmumNavbar from "../../components/NavbarUmum";
import { User, Lock } from "lucide-react";


export default function UmumDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // track sidebar state

  return (
    <div className="min-h-screen bg-sky-100 text-white">
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
          <div className="bg-[#191970] px-6 py-4 flex items-center rounded-lg justify-between mb-6">
              <img src="/image/logoh.png" alt="Logo" className="h-16" />
            <div className="flex space-x-4 items-center">
              <div className="flex items-center hover:bg-blue-100 bg-white rounded-md px-3 py-2 border">
                <User className="mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Email/Username"
                  className="bg-transparent placeholder-[#191970] focus:outline-none text-[#191970]"
                />
              </div>
              <div className="flex items-center bg-white hover:bg-blue-100 rounded-md px-3 py-2 border">
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
              <div className="flex justify-end items-center font-medium bg-[#ffffff] text-[#191970] rounded-md px-4 py-2">
                <a href="#" className="px-4 underline hover:text-blue-200 hover:underline">Contact</a>
              </div>
          {/* Kontainer utama card */}
          {/* Kontainer utama */}
          <div className="flex flex-col gap-6 p-6">
            {/* Card 1 */}
            <div className=" border-blue-900 border-3 bg-white hover:bg-blue-100 rounded-lg shadow-lg w-full">
              <img
                src="/image/logo.jpeg" alt="Edukasi Patriot Indonesia" className="w-full h-64 object-cover"/>
              <div className="p-8 text-[#191970]">
                <h3 className="font-semibold text-2xl mb-3">Edukasi Patriot Indonesia</h3>
                <p className="text-base leading-relaxed">
                  Lokasi bimbel nyaman dan strategis untuk semua siswa. Didesain untuk menciptakan pengalaman belajar yang menyenangkan, efisien, dan mudah diakses.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white hover:bg-blue-100 rounded-lg shadow-lg overflow-hidden w-full">
              <img src="/image/lmslogo.jpg" alt="Apa itu LMS?" className="w-full h-64 object-cover"/>
              <div className="p-8 text-[#191970]">
                <h3 className="font-semibold text-2xl mb-3">Apa itu LMS?</h3>
                <p className="text-base leading-relaxed">
                  Learning Management System untuk mengakses materi belajar secara online dengan mudah di mana saja.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
              <img src="/image/lms.jpg" alt="Cara Menggunakan LMS" className="w-full h-64 object-cover"/>
              <div className="p-8 text-[#191970]">
                <h3 className="font-semibold text-2xl mb-3">Cara Menggunakan LMS</h3>
                <p className="text-base leading-relaxed">
                  Login, pilih kategori, dan mulai eksplorasi materi belajar kamu dengan mudah dan interaktif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
