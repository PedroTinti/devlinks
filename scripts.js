function toggleMode() {
  const html = document.documentElement
  // 1#
  // if(html.classList.contains('light')){
  //   html.classList.remove("light")
  // }else{
  //   html.classList.add("light")

  //2#
  html.classList.toggle("light")

  /* MANIUPULAÇÃO E TROCA DE IMAGEM */
  //pegar a tag IMG
  const img = document.querySelector(
    '#profile img'
  )

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se estiver no modo claro, adicionar a imaga light
    img.setAttribute("src", "./assets/avatar-light.png")
    
  } else {
    //se estiver dark, deixar normal
    img.setAttribute("src", "./assets/Avatar.png")
      }
}
