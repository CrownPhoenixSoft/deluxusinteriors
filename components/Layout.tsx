import React from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-[#E0E0E2]">{children}</main>

      <Footer />
    </div>
  );
}
