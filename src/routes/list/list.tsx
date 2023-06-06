import DataTable from '../../components/data-table/data-table';
import useSWR from 'swr';
import Loader from '../../components/loader';
import { getAllPokemons } from '../../api/fetcher';
import { Pokemon } from '../../api/types';
import { useNavigate } from 'react-router-dom';

const List: React.FC = () => {
  const { data, error, isLoading } = useSWR<Pokemon[]>('/pokemons', getAllPokemons);
  const navigate = useNavigate();

  function handleSelectedItem(item: Pokemon) {
    navigate(`/detail/${item.id}`);
  }

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
      onSelectItem={handleSelectedItem}
    />
  );
};

export default List;
