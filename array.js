//imprimindo elementos de um array.
function testeArray(){
    var numeros = [1, 2, 3];
    numeros.push(4); //adiciona número 4.
    numeros.push(5); //adiciona numero 5.
    for(let i = 0; numeros.length > i; i++){
        console.log(numeros[i]);
    }
}

testeArray();