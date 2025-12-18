import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../organisms/Navbar';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-[#8C5A66] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 min-h-16 flex items-center justify-between py-4 md:py-0">
          <Navbar />
        </div>
      </header>

      <main className="grow max-w-4xl mx-auto w-full p-6">
        <Outlet />
      </main>

      <footer className="w-full bg-white text-gray-500 p-6 border-t text-center">
        <p>© 2025 My Phrases App</p>
      </footer>
    </div>
  );
};

export default AppLayout;