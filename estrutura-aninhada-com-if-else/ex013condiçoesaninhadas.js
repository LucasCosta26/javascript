  var idade = 22
  console.log(`Você tem ${idade} anos de idade`)
  if (idade < 16){
      console.log('Você não vota')
  }
  else{
      if(idade >= 16 && idade < 18 || idade > 65) {
      console.log('Vote tem a opção de votar caso queira')}
      else{
          console.log('Você é obrigado a votar!')} }
          
      
  //outra maneira de escrever estas linhas é a seguinte.

  //var idade  = 25
  if (idade < 16){
      console.log('Você não vota')
  }
  else if(idade < 18 || idade > 65) {
      console.log('Vote tem a opção de votar caso queira')}
      else{
          console.log('Você é obrigado a votar!')} 
