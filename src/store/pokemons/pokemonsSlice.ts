import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

const getInitialState = (): PokemonsState => {

  // Esta es una solucion implemetada rapido
  // debido a que al momento de hacer un build salta
  // un error que dice que no esta definido el localStorage
  //if (typeof localStorage === 'undefined') return {};

  const favorites = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}');
  return favorites;
}

const initialState: PokemonsState = {
    favorites: {}  
    //...getInitialState()
    /*'1': {id: '1', name:'bulbasaur'},
    '25': {id: '25', name:'pikachu'},
    '5': {id: '5', name:'chameleon'},
    '10': {id: '10', name:'caterpie'},*/
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons (state, action: PayloadAction<{[key: string]: SimplePokemon }>){
      state.favorites = action.payload;
    },

    toggleFavorite (state, action:PayloadAction<SimplePokemon>){
      const pokemon = action.payload;
      const {id} = pokemon;

      (!!state.favorites[id]) 
        ? delete state.favorites[id]
        : state.favorites[id] = pokemon  
        //! Mala practica!! 
        //! las acciones del reducer tienen que poder mutar el estado 
        //! con el payload y nada mas, no deben tener conexiones con el exterior
        //localStorage.setItem('favoritePokemons', JSON.stringify(state))
        //Para solventar se aplico un middleware
    }
  }
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer