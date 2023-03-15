

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

    static ActiveTemplate() {
        return `
        <div class="row text-center sticky-top bg-white rounded p-4">
        <div><img class="img-fluid" src="${this.img}" alt="${this.name}"></div>
        <h3 class="text-primary fw-bold border-bottom">${this.name}</h3>
        <h4>${this.nickName}</h4>
        <h4>${this.weight} | ${this.height} | ${this.types}</h4>
        </div>
        `
    }
}