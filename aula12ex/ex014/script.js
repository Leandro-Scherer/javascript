function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let data = new Date()
  let hora = 5 // ou data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if(hora >= 0 && hora < 12){
    img.src = 'imagens/imagem-manha.png'
    document.body.style.background = '#e2cd9f'
  } else if(hora >= 12 && hora < 18){
    img.src = 'imagens/imagem-tarde.png'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'imagens/imagem-noite.png'
    document.body.style.background = '#515154'
  }
}