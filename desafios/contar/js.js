function contar(){
    let ini =document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let res = document.getElementById('res')

if( ini.value.length == 0 || fim.value.length == 0 || pas.value.length ==0){
    window.alert("Error")
}
else{
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if(p<=0){
        window.alert("Progressão é igual a 0. Será considerada como 1") 
        p = 1
    }

if(i<f){
        //progressão crescente
    for (let c = i; c <= f; c += p) {
    res.innerHTML+= `${c} \u{1F449}`
}}
 else {
    //progressao decrescente
    for(let c =i; c>=f; c-=p){
    res.innerHTML+=`${c} \u{1F449}`
}}
res.innerHTML +=`\u{1F3c1}`
}}
//fique atento aos operadores matematicos, abertura e fechamento de colchetes