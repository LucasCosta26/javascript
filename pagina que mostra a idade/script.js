
function Verificar() {
    var data = new Date()
    var idade =data.getFullYear()
    var atual = document.getElementById('dia')
    var res = document.getElementById('res')
    if(dia.value.length == 0 || Number (dia.value) > idade) {
        window.alert('[ERROR] tente novamente')
    }  
    else{
        var fsex = document.getElementsByName('radsex')
        var ano = idade - Number(atual.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(ano >=0 && ano < 5){
                img.setAttribute( 'src','bebehomem.png')
            }
            else if( ano < 10){
                //criança
                img.setAttribute( 'src','criançahomem.png')
            }
            else if(ano < 20){
                //jovem
                img.setAttribute( 'src','homemjovem.png')
            }
            else if(ano <60){
                //adulto
                img.setAttribute( 'src','homemadulto.png')
            }
            else if( ano >=60){
                //idoso
                img.setAttribute( 'src','homemidoso.png')
            }
        }
        else if(fsex[1].checked)
            genero = 'Mulher'
            if(ano >=0 && ano < 5){
                //bebe
                img.setAttribute( 'src','bebemulher.png')
            }
            else if( ano < 10){
                //criança
                img.setAttribute( 'src','criançamulher.png')
            }
            else if(ano < 20){
                //jovem
                img.setAttribute( 'src','mulherjovem.png')
            }
            else if(ano <60){
                //adulto
                img.setAttribute( 'src','mulheradulta.png')
            }
            else if( ano >=60){
                //idoso
                img.setAttribute( 'src','mulheridosa.png')
            }
        
        res.innerHTML = `Idade calculada é de  ${ano} anos!`
        res.appendChild(img)
    }


 }