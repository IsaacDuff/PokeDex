import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokemonsController = new PokemonsController()

  sandboxPokemonsController = new SandboxPokemonsController
}

window["app"] = new App();
