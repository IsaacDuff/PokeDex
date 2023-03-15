import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

const poke = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})



class PokemonsService {

    async getAllPokemon() {
        const res = await poke.get('pokemon?offset=0&limit=20')
        console.log('[Pokemon]', res.data);
        appState.wildPokemon = res.data.results
        console.log(appState.wildPokemon);

    }

    async selectPokemon(name) {
        const res = await poke.get(`pokemon/${name}`)
        console.log('chosen pokemon', res.data);
        appState.activePokemon = new Pokemon(res.data)
    }

}

export const pokemonsService = new PokemonsService()