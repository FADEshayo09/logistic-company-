// src/layouts/Layout.tsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="p-6 min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}
