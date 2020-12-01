import React from "react";
import NavbarHome from "../components/NavbarHome.js";
import MainHeader from "../components/MainHeader.js";

export default function Home() {
  return (
    <main className="bg-home w-full h-screen font-header antialiased overflow-auto">
      <NavbarHome />
      <section>
        <MainHeader />
      </section>
    </main>
  );
}
