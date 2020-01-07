function carregar(){
    var msg = window.document.getElementById('msg')
    //outra maneira de se declarar uma variavel.
    //let msg =window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data= new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 &&  12) {
        //Bom Dia    
        img.src = 'manha.png'
    }else if (hora >= 12 &&  18) {
        //Boa tarde    
        img.src ="tarde.png"
    }else{
        //Boa noite
        img.src="noite.png"
    }
}

