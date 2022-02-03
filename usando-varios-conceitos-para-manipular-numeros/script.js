let num = document.querySelector('#inclu').value
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []


function incluir() {
    if (isNumero(num) && !inLista(num, valores)) {
        valores.push(Number(num))
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }else{ window.alert("Valor inválido ou já incluso na lista")}}

/*function isNumero(n) {
    if (Number (n) >=1 && Number(n) <=100) {
        return true
    }else{
        return false
    }
}

function inLista(n, 1) {
    if (1.indexOf (Number(n)) != -1) {
        return true
    } else {
        return false
    }
}