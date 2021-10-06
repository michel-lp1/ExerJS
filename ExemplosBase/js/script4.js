import { titulo, user, setTitulo, exibirTitulo, exibirUser } from './dados.js';

exibirTitulo();
setTitulo("Aula hard");
exibirTitulo();

console.log(user);

let campo = document.querySelector("#saida");
exibirUser(campo);