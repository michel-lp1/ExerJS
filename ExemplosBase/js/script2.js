"use strict";
let pessoa1 = {
    nome   : "Alcides",
    altura : 1.69,
    idade  : 41
};

let pessoa2 = {
    nome  : "Ligia",
    altura: 1.83,
    idade : 30
};

let pessoas = [pessoa1, pessoa2];
let campo = document.querySelector("#rel_pessoas");
for (let p of pessoas){
    campo.innerHTML += `<h1>Nome: ${p.nome}, Idade: ${p.idade}`;
}