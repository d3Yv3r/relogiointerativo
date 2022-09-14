function carregar () {
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()
  let minuto = data.getMinutes()
  msg.innerHTML = `Agora são ${hora} : ${minuto} horas.`

  if(hora >= 0 && hora <= 11) {
    img.src = 'img/fotomanha.png'
    document.body.style.background = '#e2cd9f'

  } else if (hora >= 12 && hora <= 18) {
    img.src = 'img/fototarde.png'
    document.body.style.background = '#72424e'

  } else {
    img.src = 'img/fotonoite.png'
    document.body.style.background = '#121a1c'

  }
}

