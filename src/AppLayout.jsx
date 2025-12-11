import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">Empowering Phrases App</h1>
      </header>
      <main className="max-w-3xl mx-auto p-4">{children}</main>
    </div>
  );
};

export default AppLayout;

