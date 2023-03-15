import { appState } from "../AppState.js";

const poke = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})



class PokemonsService {

    async getAllPokemon() {
        const res = await poke.get('pokemon?offset=20&limit=20')
        console.log('[Pokemon]', res.data);
        appState.wildPokemon = res.data.results
        console.log(appState.wildPokemon);

    }

}

export const pokemonsService = new PokemonsService()