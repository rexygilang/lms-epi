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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login LMS</h1>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="admin">Admin</option>
        <option value="guru">Guru</option>
        <option value="siswa">Siswa</option>
      </select>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Masuk
      </button>
    </div>
  );
}
