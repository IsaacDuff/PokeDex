

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.user = data.user
    }

    static listTemplate(pokemon) {
        return `
        <div class="row align-items-center bg-white rounded m-2">
        <div class="col-9 fw-bold">${pokemon.name}</div>
        <div class="col-2"><button class="btn btn-secondary" onclick="app.pokemonsController.selectPokemon('${pokemon.name}')">🪝</button>
        </div>
        </div>
        `
    }
}