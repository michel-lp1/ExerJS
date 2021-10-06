$("#somar").click(function(){
    let n1 = Number(   $("#valor1").val()  );
    let n2 = Number(   $("#valor2").val()  );  //.value
    $("#resul").html(`<h3>Resultado: ${ somaValores(n1,n2) }</h3>`);
    //document.querySelector("#resul").innerHTML = `<h3>Resultado: ${ somaValores(n1,n2) }`
});

let somaValores = (v1,v2) => v1+v2;