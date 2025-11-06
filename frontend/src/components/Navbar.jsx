import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Tombol toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-slate-800 text-white fixed top-4 left-4 rounded-md z-20"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-slate-800 text-white h-screen p-4 transition-all duration-300 ${
          open ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li className="hover:bg-slate-700 p-2 rounded">Dashboard</li>
          <li className="hover:bg-slate-700 p-2 rounded">Profil</li>
          <li className="hover:bg-slate-700 p-2 rounded">Pengaturan</li>
        </ul>
      </div>
    </div>
  );
}
