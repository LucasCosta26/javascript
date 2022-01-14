
var i = 1
while ( i <= 3){// essa é uma estrutura simple do while
    console.log(`Olá, Lucas ${i}`)
    i++ // Se você esquecer que aumentar a variável o loop não terá fim e irá travar o terminal.
}

/*console.log("Olá, Lucas!")
console.log("Olá, Lucas!") esse é um modo incorreto de execução
console.log("Olá, Lucas!")*/


// outra forma de while com o DO
do {
    console.log('Lucas!');
    i++;
}
while ( i <= 0)  //mesmo minha condição sendo false, o (do) irá executar ao menos um vez 