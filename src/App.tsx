import React from 'react';
import Navbar from './components/navbar';
import DataTable from './components/data-table/data-table';

function App() {
  return (
    <main>
      <Navbar />
      <div className="flex px-4 pb-10 flex-1 gap-x-3">
        <DataTable />
      </div>
    </main>
  );
}

export default App;
