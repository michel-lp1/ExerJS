$("#button1").click(gravarDados);
$("#button2").click(carregarDados);
$("#button3").click(apagarDados);

function gravarDados(){
    localStorage.setItem("nome", $("#nome").val() );
    localStorage.setItem("rgm", $("#rgm").val() );
}

function carregarDados(){
    if (localStorage.length > 0){
        $("#nome").val( localStorage.getItem("nome") );
        $("#rgm").val( localStorage.getItem("rgm") );
    }else{
        alert("ERRO");
    }
}

function apagarDados(){
    localStorage.clear();
}