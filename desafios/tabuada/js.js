
function contar(){
    var num = document.getElementById(`num`)
    var botão = document.getElementById(`res`)
    if(num.value.length == 0){  
        window.alert('[ERRO] insira um número maior que 0')
    }else{
        var n = Number(num.value)
        //limpa o select
        botão.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement(`option`)
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `botão${c}`
            botão.appendChild(item)
            
        }
        
    }
 
}
