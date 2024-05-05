import { PokemonsReponse, SimplePokemon } from '@/pokemons';
import { PokemonGrid } from '@/pokemons';



export const metadata = {
 title: 'Pokemons',
 description: 'Pagina de Pokemons',
};

const getPokemnons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemnons(151);

  return (
    <div className="flex flex-col">
      <span className='text-5xl my-2'>Listado de Pokemons <small className='text-blue-500'>estatico</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
