import { useState } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

export default function UmumNavbar() {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <>
      {/* Tombol toggle sidebar */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-4 z-50 bg-[#191970] text-white p-2 hover:bg-blue-800 transition-transform duration-300 rounded-tr-md rounded-br-md ${
          open ? "translate-x-64" : "translate-x-0"
        }`}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#191970] to-[#000000] text-white w-64 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-xl z-40`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-700">
            <img src="/logo192.png" alt="Logo" className="w-16 h-16" />
        </div>

        {/* Menu Items */}
        <ul className="px-4 py-6 space-y-4 text-lg">
          <li className="hover:text-blue-300 cursor-pointer transition">
            Announcements
          </li>

          {/* Category dengan submenu */}
          <li>
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="flex justify-between items-center w-full hover:text-blue-300 transition"
            >
              <span>Category</span>
              {openCategory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {openCategory && (
              <ul className="mt-2 ml-4 space-y-2 text-base text-gray-300">
                <li className="hover:text-blue-200 cursor-pointer">CPNS</li>
                <li className="hover:text-blue-200 cursor-pointer">BUMN</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
