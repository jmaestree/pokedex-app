import useSWR from 'swr';
import Loader from '../../components/loader';
import { useForm } from 'react-hook-form';
import { Pokemon } from '../../api/types';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetcher';
import { useEffect } from 'react';
import { Input } from '../../components/input/input';

function getInitialValues(item: Pokemon | undefined): Partial<Pokemon> {
  return {
    name: item?.name,
    height: item?.height,
    weight: item?.weight,
    image: item?.image
  };
}

const Form: React.FC = () => {
  const { pokemonId } = useParams();
  const { data, error, isLoading } = useSWR<Pokemon>(['/pokemons', pokemonId], getPokemon);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    values: getInitialValues(data)
  });

  useEffect(() => {
    if (data !== undefined) {
      reset(getInitialValues(data));
    }
  }, [data, reset]);

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

  const onSubmit = (data: Partial<Pokemon>) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input id="item-name" label="Name" type="text" {...register('name', { required: true })} />
      <Input id="item-height" label="Height" type="number" {...register('height', { required: true })} />
      <Input id="item-weight" label="Weight" type="number" {...register('weight', { required: true })} />
      <Input id="item-image" label="Image" type="url" {...register('image', { required: true })} />
      <button
        className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-100 bg-green-500 text-gray-start hover:bg-green-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
