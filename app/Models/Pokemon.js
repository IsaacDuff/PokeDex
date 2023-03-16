

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types || 'No Type'
        this.user = data.user
    }

    static listTemplate(pokemon) {
        console.log('checking poke in listtemp', pokemon.name)
        return `
        <div class="row align-items-center bg-white rounded m-2">
        <div class="col-9 fw-bold">${pokemon.name}</div>
        <div class="col-2"><button class="btn btn-secondary" onclick="app.pokemonsController.selectPokemon('${pokemon.name}')">🪝</button>
        </div>
        </div>
        `
    }

    get ActiveTemplate() {
        return `
        <div class="row text-center sticky-top bg-white rounded p-4">
        <div><img class="img-fluid" src="${this.img}" alt="${this.name}"></div>
        <h3 class="text-primary fw-bold border-bottom">${this.name}</h3>
        <h4>${this.weight} lbs | ${this.height} in | Types: ${this.getTypes()}</h4>
        </div>
        `
    }

    getTypes() {
        console.log(this.types);
        let template = ''
        for (let index = 0; index < this.types.length; index++) {
            template += this.types[index].type.name
            if (this.types[index + 1]) {
                template += ' & '
            }
        }
        return template

    }
}