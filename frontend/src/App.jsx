import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuruDashboard from "./pages/guru/Dashboard";
import Dashboard from "./pages/siswa/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import UmumDashboard from "./pages/umum/UmumDashboard";

export default function App() {
  return (
    <UmumDashboard/>
  );
}
