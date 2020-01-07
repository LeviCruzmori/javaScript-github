/*
function verificar(){
    window.alert()
}
*/
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
     // res.innerHTML = `Idade Calculada: ${idade}`mostra a idade realdo usuario.
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if (fsex[0].checked) {
         gênero = 'Homem' 
         if (idade >=0 && idade<10) {
             //criança    
             img.setAttribute("src","menino.jpg")    // redimencionar as imagens.     
         }else if (idade <21) {
             //Jovem    
             img.setAttribute("src","rapaz.jpg")          
         }else if (idade <50) {
             //Adulto             
             img.setAttribute("src","adulto1.jpg") 
         }else{
             // Idoso
             img.setAttribute("src","idoso.jpg") 
         }
     }else if (fsex[1].checked) {
         gênero = 'Mulher'
        
         if (idade >=0 && idade<10) {
             //criança             
             img.setAttribute("src","menina.jpg") 
         }else if (idade <21) {
             //Jovem    
             img.setAttribute("src","moça.jpg" )          
         }else if (idade <50) {
             //Adulto  
             img.setAttribute("src","adulta.jpg")            
         }else{
             // Idoso
             img.setAttribute("src","idosa.jpg") 
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
    }
}