//Manipulando strings!
//Esse tipo de formatção place holder é aceito somente quando String estiver entre crase.
var nome = 'Rômulo'
var idade = 31
var nota = 8.5

console.log(`O aluno ${nome},` + 
` com idade ${idade} tirou a nota -> ${nota}!`)

var r = 'Rômulo de Carvalho'
console.log(`O nome ${r} tem ` +
 r.length + ' caracteres!') // imprime a quantidade de caracteres da String.
 console.log(`Imprimindo ${r} em caixa alta, ` + 
 r.toUpperCase() + '!') // Imprimindo String em caixa Alta.
 console.log(`Imprimindo ${r}, em letras minúsculas ` + 
 r.toLowerCase() + `!`) // imprime a string em letras minúsculas.