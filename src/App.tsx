import React from 'react';
import Navbar from './components/navbar/navbar';
import DataTable from './components/data-table/data-table';
import useSWR from 'swr';
import fetcher, { urls } from './api/fetcher';
import { Pokemon } from './api/types';
import Loader from './components/loader';

function App() {
  const { data, error, isLoading } = useSWR<Pokemon[]>(urls.getAll, fetcher);

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>There's an error retrieving data from API</p>;
  }

  if (!data) {
    return <p>There's no data available</p>;
  }

  return (
    <main>
      <Navbar />
      <div className="flex px-4 pb-10 flex-1 gap-x-3">
        <DataTable
          data={data}
          columns={[
            {
              key: 'id',
              title: 'ID',
              type: 'id'
            },
            {
              key: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              key: 'image',
              title: 'Image',
              type: 'image'
            },
            {
              key: 'base_experience',
              title: 'Base Experience',
              type: 'number'
            },
            {
              key: 'height',
              title: 'Height',
              type: 'number'
            },
            {
              key: 'weight',
              title: 'Weight',
              type: 'number'
            }
          ]}
          search={{
            columns: ['id', 'name', 'base_experience', 'height', 'weight']
          }}
        />
      </div>
    </main>
  );
}

export default App;
