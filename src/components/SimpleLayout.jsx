import React from 'react';

const SimpleLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default SimpleLayout;
