import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [role, setRole] = useState("siswa");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin") navigate("/admin");
    else if (role === "guru") navigate("/guru");
    else navigate("/siswa");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-6">Login LMS</h1>

        <label className="block text-gray-700 mb-2">Pilih Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded p-2 w-full mb-4"
        >
          <option value="admin">Admin</option>
          <option value="guru">Guru</option>
          <option value="siswa">Siswa</option>
        </select>

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Masuk
        </button>
      </div>
    </div>
  );
}
