import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div>
      {}
      <header>
        <h1>Empowering Phrases App</h1>
      </header>

      {}
      <main>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
