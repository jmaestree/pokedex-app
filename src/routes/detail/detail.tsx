import useSWR from 'swr';
import Loader from '../../components/loader';
import { Pokemon } from '../../api/types';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetcher';

const Detail: React.FC = () => {
  const { pokemonId } = useParams();
  const { data, error, isLoading } = useSWR<Pokemon>(['/pokemons', pokemonId], getPokemon);

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

  return <pre>{JSON.stringify(data)}</pre>;
};

export default Detail;
