// Declarando Variaveis Node.js
var a = 1, cauculo;
var b = 2, c = 3;
var nome = "Rômulo";

cauculo = a + b * c;
console.log(cauculo);

console.log(nome, "O valor do cálculo é ->  ", cauculo + "!");

//----------------------------------------------------------------------------------------------------
console.log("------------------------------------------------------------------");

function testeVar() {
    var r = 5, s = 8;
    var nome = "Rômulo"
    var soma = r + s;

    console.log("Olá %s, a soma vale -> %d", nome, soma, "que", "legal!");
    
}

//execulta a função!
testeVar();

//-----------------------------------------------------------------------------------------------
console.log("---------------------------------------------------------------------");

function testeVar2(){
    var r = 5, s = 10;
    var nome;
    var soma = r + s;

    if(nome == undefined){
        console.log("Teste 1) O nome não foi inicializado!");
    }

    if(typeof(nome) == "undefined"){
        console.log("Teste 2) O nome não foi inicializado!");
    }

    console.log("O tipo do nome é %s," +
    " e o tipo da soma é %s!", typeof(nome), typeof(soma));

    console.log(nome + " a soma vale -> %d!", soma);
}

testeVar2();


 