/*var n1 = Number(window.prompt('Digite um número: ')) - Tudo que estiver dentro de um comando "prompt" vira uma String.
var n2 = Number(window.prompt('Digite outro número: ')) - String
var s = n1 + n2
window.alert(`A soma de ${n1} mais ${n2} é igual a ${s}`)*/

/* Se não houver a conversão da String em Number, 
o JS irá fazer uma concatenação e não uma adição, como pretendido.*/

/* Para fazer a conversão de uma String para Number, 
primeiro nós temos que colocar depois do sinal "=" a seguinte informação:
 Number.parseInt(comando utilizado). Caso o número desejamos o número real, 
 devemos utilizar o parseFlout. Nas versão mais rescente do ES6, não é mais
 necessário acrescentar o parseFlout ou parseInt para fazer essa conversão. 
 Basta acrescentar somente Number.*/

/*Para converter um Number para String, nos podemos utilizar dois comando, sendo eles:
 "String(nome_da_variavel)"" ou "nome_da_variavel.toString()"*/

/*Para fazer concatenações entre Strings, nós podemos utilizar duas formas. A primeira, nós iremos utilizar '
 entre os valores da variáveis antecedido pelo sinal de +. Exemplo: 'O valor de ' + n1 + ' n2 + ' é igual a ' + s;
 Ou nós podemos fazer da seguinte maneira: 'O valor de ${n1} mais ${n2} é igual a ${s}.*/

/*const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 80;
const alturaEmM = 1.8;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} de idade e pesa ${peso} KG.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);*/

/*let c = 1;
while (c <= 5) {
  console.log(c)
  c++
}

for(let c = 1; c<=5; c++) {
  console.log(c)

}*/

/*num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos=0; pos<num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let num = [5, 8, 9, 4]
num.sort

for(let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.indexOf(9)
*/
