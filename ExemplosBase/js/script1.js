"use scrpit";

let canvas = document.querySelector("#canvas");
let contexto = canvas.getContext("2d");


let bola = {
    cor: "red",
    x: Math.round(Math.random()*500),
    y: Math.round(Math.random()*500),
    raio:20
};

function desenhar(){
    contexto.beginPath();
    contexto.arc(bola.x, bola.y, bola.raio, 0, 2 * Math.PI);
    contexto.fillStyle = bola.cor;
    contexto.fill();
}

desenhar();
