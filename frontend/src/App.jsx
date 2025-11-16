import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuruDashboard from "./pages/guru/Dashboard";
import Dashboard from "./pages/siswa/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import UmumDashboard from "./pages/umum/UmumDashboard";
import Konten from "./pages/umum/Konten";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UmumDashboard />} />

        <Route path="/konten" element={<Konten />} />
        <Route path="/login" element={<GuruDashboard />} />
      </Routes>
    </Router>
  );
}


export default App;