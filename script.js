function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")
  //substituir imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile-pic-light.png")
  } else {
    img.setAttribute("src", "./assets/profile-pic.png")
  }
}
