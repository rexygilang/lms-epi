import { useEffect, useState } from "react";
import UmumNavbar from "../../components/NavbarGuru";
import { User, Lock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function UmumDashboard() {
  useEffect(() => {
    document.title = "Learning Management System | EPI";
  }, []);

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
            <Link to="/" className="block">
              <img src="/image/logoh.png" alt="Logo" className="h-16" />
            </Link>
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
              {/* <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#191970] hover:text-blue-600" title="Login"><ChevronRight size={20} /></button> */}
              <a href="" className="px-2 py-2 bg-white text-[#191970] border border-white rounded-md hover:bg-blue-100 font-semibold"><ChevronRight size={20} /></a>
            </div>
          </div>

          {/* Garis HR */}
          <hr className="border-t border-[#191970]" />

          <div className="bg-white rounded-lg flex justify-between">
            <a className="font-bold text-black px-4 py-2 rounded">Learning Management System</a>
            <a className="bg-blue-900 hover:bg-blue-300 hover:text-black font-bold text-white hover:font-semibold cursor-pointer transition px-4 py-2 rounded">Contact Us</a>
          </div>

          {/* Kontainer utama */}
          <div className="flex flex-col gap-14">
            {/* Card 1 */}
            <Link to="/konten" className="block">
              <div className="bg-white hover:bg-blue-100 rounded-lg shadow-lg overflow-hidden w-full border border-[#191970] hover:border-blue-500">
                <img
                  src="/image/logo.jpeg" alt="Edukasi Patriot Indonesia" className="w-full h-64 object-cover "/>
                <div className="p-8 text-[#191970]">
                  <h3 className="font-bold text-3xl mb-3">Edukasi Patriot Indonesia</h3>
                  <p className="text-base leading-relaxed underline">
                    Lokasi bimbel nyaman dan strategis untuk semua siswa. Didesain untuk menciptakan pengalaman belajar yang menyenangkan, efisien, dan mudah diakses.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <div className="bg-white hover:bg-blue-100 rounded-lg shadow-lg overflow-hidden w-full border border-[#191970] hover:border-blue-500">
              <img src="/image/lmslogo.jpg" alt="Apa itu LMS?" className="w-full h-64 object-cover"/>
              <div className="p-8 text-[#191970]">
                <h3 className="font-bold text-3xl mb-3">Apa itu LMS?</h3>
                <p className="text-base leading-relaxed underline">
                  Learning Management System untuk mengakses materi belajar secara online dengan mudah di mana saja.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white hover:bg-blue-100 rounded-lg shadow-lg overflow-hidden w-full border border-[#191970] hover:border-blue-500">
              <img src="/image/lms.jpg" alt="Cara Menggunakan LMS" className="w-full h-64 object-cover"/>
              <div className="p-8 text-[#191970]">
                <h3 className="font-bold text-3xl mb-3">Cara Menggunakan LMS</h3>
                <p className="text-base leading-relaxed underline">
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
