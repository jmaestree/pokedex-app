import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row p-4 mb-3 bg-white border-b shadow justify-between items-center">
      <h1 className="text-xl font-bold">Pokédex</h1>
    </div>
  );
};

export default Navbar;
