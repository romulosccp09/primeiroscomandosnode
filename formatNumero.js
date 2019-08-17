//Formatando Números.
var n1 = 1.58

console.log(n1)
console.log(`${n1} formatado com 3 casas decimais: ${n1.toFixed(3)}!`)
console.log(`${n1} formatado com ',': ${n1.toFixed(3).replace('.', ',')}!`)

//--------------------------------------------------------------------------
var salário = 1585.583
console.log(salário.toLocaleString('pt-BR', 
{style: 'currency', currency: 'BRL'}).replace('.', ','))