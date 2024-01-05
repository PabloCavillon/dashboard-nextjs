import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Lista de pokemones',
 description: 'Sint enim est reprehenderit cillum et dolore.',
};

const getPokemons = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    
    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))


    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(649);
    return (
        <div className="fles fles-col">
            <span className="text-5xl my-2">Listado de Pokémons <small className="text-blue-500">estático</small></span>
            <PokemonGrid pokemons={pokemons} />
            
        </div>
    );
}