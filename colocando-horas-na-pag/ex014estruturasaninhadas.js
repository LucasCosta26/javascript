var agora = new Date()
var hr = agora.getHours()//para vc pegar a hora precisa criar a variavel anterior, pois assim "novo dado" vc pode importar lo na variavel seguinte
if (hr >6 && hr < 12) { 
    console.log('Bom dia!')
    
} else if (hr > 12 && hr < 19){
    console.log('Boa tarde.')}
    else{
        console.log('Boa noite')}
