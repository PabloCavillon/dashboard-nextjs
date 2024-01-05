import { FavoritePokemon, PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

export const metadata = {
    title: 'Favoritos',
    description: 'Sint enim est reprehenderit cillum et dolore.',
};

export default async function FavoritosPage() {

    return (
        <div className="fles fles-col">
            <span className="text-5xl my-2">
                Pokemons favoritos <small className="text-blue-500">Global State</small>
            </span>

            <FavoritePokemon />
        </div>
    );
}