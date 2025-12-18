import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#8C5A66] text-white p-4 shadow">
        <h1 className="text-xl font-bold">Empowerment Phrases</h1>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {children}
      </main>

      <footer className="text-center text-gray-500 p-4 border-t mt-6">
        © 2025 My Phrases App
      </footer>
    </div>
  );
};

export default AppLayout;
