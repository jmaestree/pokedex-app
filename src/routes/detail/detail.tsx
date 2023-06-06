import useSWR from 'swr';
import Loader from '../../components/loader';
import { Pokemon, Stat } from '../../api/types';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetcher';
import { ListItem } from './list-item';

function getStats(stats: Stat[]) {
  const res: React.ReactNode[] = [];

  stats.forEach((stat) => {
    res.push(<ListItem key={stat.stat.name} title={stat.stat.name} value={stat.base_stat} />);
  });

  return res;
}

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

  const { name, abilities, image, height, weight, base_experience, forms, stats, types, id } = data;

  return (
    <div className="grid auto-rows-min grid-cols-12 gap-5">
      <div className="flex col-span-12 md:col-span-6 lg:col-span-4">
        <img src={image} alt={name} className="rounded-lg object-top object-scale-down" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-8">
        <h1 className="text-2xl font-medium text-gray-900 capitalize mb-5 items-center flex">
          <span className="text-gray-600 mr-2">#{id}</span>
          <span className="capitalize">{name}</span>
          <div className="ml-5 inline-flex gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-neutral-900 ring-1 ring-inset ring-neutral-300 bg-neutral-100">
            {types.map((type) => type.type.name).join(', ')}
          </div>
        </h1>
        <h3 className="text-gray-600 mt-3">Stats</h3>
        <hr className="border-b border-gray-200 mt-2 mb-3" />
        {getStats(stats)}
        <h3 className="text-gray-600 mt-3">Details</h3>
        <hr className="border-b border-gray-200 mt-2 mb-3" />
        <ListItem title="Height" value={height} />
        <ListItem title="Weight" value={weight} />
        <ListItem title="Base experience" value={base_experience} />
        <ListItem title="Abilities" value={abilities.map((item) => item.ability.name).join(', ')} />
        <ListItem title="Forms" value={forms.map((item) => item.name).join(', ')} />
        <h2 className="sr-only">Images</h2>
      </div>
    </div>
  );
};

export default Detail;
