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
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#000000] to-[#191970] text-white w-64 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-xl z-40`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-700">
            <img src="/image/logo1.png" alt="Logo" className="h-16" />
        </div>

        {/* Menu Items */}
        <ul className="px-4 py-6 space-y-4 text-lg">
          <li className="bg-blue-900 hover:bg-blue-300 hover:text-black hover:font-semibold cursor-pointer transition px-4 py-2 rounded">
            Announcements
          </li>

          {/* Category dengan submenu */}
          <li>
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="flex justify-between items-center w-full bg-blue-900 hover:bg-blue-300 hover:text-black hover:font-semibold cursor-pointer transition px-4 py-2 rounded"
            >
              <span>Category</span>
              {openCategory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {openCategory && (
              <ul className="mt-2 ml-4 mt-5 space-y-2 text-base text-gray-300">
                <li className="px-2 py-1 bg-blue-950 hover:bg-blue-300 hover:text-black hover:font-semibold text-xl cursor-pointer rounded">CPNS</li>
                <li className="px-2 py-1 bg-blue-950 hover:bg-blue-300 hover:text-black hover:font-semibold text-xl cursor-pointer rounded">BUMN</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
