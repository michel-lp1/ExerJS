import { Bolinha } from "./Bolinha.js";

let bola = new Bolinha("blue", 4, 5, 40);
console.log(bola.bcor);
bola.bcor = "red"
console.log(bola);

let p = new Pessoa("Alcides", 41, 1.69);
console.log(p.toString());