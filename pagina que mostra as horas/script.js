
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora =agora.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds()
    
    if (hora >=0 && hora <12){
        //Bom dia
        img.src ='img/fotomanha.png'
        msg.innerHTML = `Agora são ${hora} e ${min} minutos!`
        document.body.style.background = "#7C7BA6"
    }
    else if(hora >= 12 && hora < 19){
        //Boa tarde
        img.src ='img/fototarde.jpg'
        msg.innerHTML = `Agora são ${hora} e ${min} minutos! `
        document.body.style.background = "#F2A71B"
    } 
    else{//Boa noite
        img.src = 'img/fotonoite.jpg'
        msg.innerHTML = `Agora são ${hora} e ${min} minutos!`
        document.body.style.background = "#1E3A40"
    }
}
