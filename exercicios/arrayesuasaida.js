const num = [8,5,1,3] //aqui temos uma array constante, lembre-se que cada número ocupa uma posição: (posi 0 é o num 8, posi 1 é o num 5).
num[2]=34  //quando vc coloca um número definindo o lugar dele, ele ira retirar aquele e entrar no lugar dele, nesse caso o 34 vai tirar o 1
num[3]=43 //aqui o 43 irá retirar o 3
num.push(4) //aqui o num entra no final da lista
num.sort() //coloca em ordem crescente 
console.log(num);



const cars =['cavalo','','','cao', '','bode','cabra','corsa']//ja nesse caso, observe que a aspas vazias, entao se posso colocar objetos dentro sem retirar outros daquela posição
cars[1]='gol';
cars[4]='fox';
cars[2]='palio';
console.log( cars);


const person = {firstName:"John", lastName:"Doe", age:46}; //aqui ja temos uma array com variaveis sendo introduzidas por dentro, detalhe: é feita por chaves.
console.log(`Primeiro nome ${person.firstName}, idade de: ${person.age} anos`); // sempre tem que buscar o nome da variavel la fora, mais a variavel que voce deseja.


var res = [8,6,48,7,5,9,2,1,15,14,75,85]
for (let pos = 0; pos < res.length; pos++) {
    console.log(`A posição ${pos} contem o número ${res[pos]}`)// observe a saída dessa operação. Observa sintaxe para a saida da posição
}
// outro metodo para a operação anterior
for (var pos in res) {// leia-se: Para cada posição em res(variavel composta) irá criar uma variavel para ter saida. (É usada para ARRAY)
    console.log(`A posição ${pos} contem o número ${res[pos]}`)
}

var neg = res.indexOf(3) //Observe que a saída é -1, isso porque nao tem esse objeto na variavel res
console.log(neg)
var local = res.indexOf(48)// indexOf mostra a vaga que o objeto ocupa na variavel
console.log(local)