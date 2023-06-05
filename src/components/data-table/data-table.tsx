import React from 'react';

import './styles.css';

const list = [
  {
    id: 'id-item-1',
    title: 'title-item-1',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png'
  },
  {
    id: 'id-item-2',
    title: 'title-item-2',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png'
  },
  {
    id: 'id-item-3',
    title: 'title-item-3',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png'
  }
];

const DataTable: React.FC = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td className="w-1/12">
              <div className="text-gray-900">{item.id}</div>
            </td>
            <td>
              <div className="flex items-center">
                <div className="h-20 w-20 flex-shrink-0">
                  <img className="h-20 w-20 rounded-full" src={item.image} alt="" />
                </div>
                <div className="ml-4">
                  <div className="text-gray-900">{item.title}</div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
