//declaraçao de funcao
/* 
 *  Funções são declaradas com a palavra
 * reservada function.
 *  Sinntaxe:  
 * function hello() {
 *  console.log("Olá, Node.js!");
 * }
 */
// função soma.

function soma(a,b){
    return a + b;
}

var soma = soma(8,5);
console.log(soma);

//funçao subtração.

function sub(a,b){
    return a-b;
}

var subtração = sub(8,5);
console.log(subtração);

//função multiplicação.

function multi(a,b) {
    return a*b;
}

var multiplicação = multi(10,5);
console.log(multiplicação);

//função divisão.
function div(a,b){
    return a/b;
}

var divisão = div(10,5);
console.log(divisão);

//função potenciação
function pot(a,b){
    return Math.pow(a,b);
}

var potencia = pot(5,2);
console.log(potencia);
 
//função raiz.
function raiz(a,b){
    return Math.sqrt(a,b);
}

var ra = raiz(9);
console.log(ra);
 