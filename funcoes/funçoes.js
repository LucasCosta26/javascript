function parimp(n) {
    if (n %2 ==0) {
        return 'par'
    }
    else{
        return 'impar'
    }
}
 var res = parimp(7)
 console.log(`O numero é ${res}`)

 //nessa funçao eu do parametros para eu ( n1, n2)

 function soma(n1=0, n2=0) {
     return n1 +n2
 }
 console.log(soma(1,2+4))

 //posso também como uma função dentro de uma variável

 var s = function (x) {
     return x*3
 }
 console.log(s(3))

 // função para saber o fatorial de um numero
 function fator(x) {
     let fat = 1
    for (let c = x; c > 1; c--) {
         fat *=c
        }
        return fat
}
var num = fator(8)
console.log(num)