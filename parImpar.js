//Par ou ímpar

function parImpar(a){
    if(a%2 == 0){
        return console.log("%d é Par.", a);
    } else{
        return console.log("%d é Impar.", a);
    }
}

var a = parImpar(3);

var b = parImpar(8);

console.log(a);
console.log(b);