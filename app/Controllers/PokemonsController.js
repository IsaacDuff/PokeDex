import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js";
import { Pokemon } from "../Models/Pokemon.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemonList() {
    let pokemon = appState.wildPokemon
    let template = ''
    pokemon.forEach(p => template += Pokemon.listTemplate(p))
    setHTML('wildPokemon', template)
}

function _drawActivePokemon() {
    let pokemon = appState.activePokemon
    setHTML('activePokemon', pokemon.ActiveTemplate)

}


export class PokemonsController {

    constructor() {
        console.log('hello from the pokemons controller')
        this.getAllPokemon()
        appState.on('wildPokemon', _drawPokemonList)
        appState.on('activePokemon', _drawActivePokemon)
    }


    async getAllPokemon() {
        try {
            await pokemonsService.getAllPokemon()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    async selectPokemon(name) {
        try {
            console.log('selected', name);
            await pokemonsService.selectPokemon(name)

        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}