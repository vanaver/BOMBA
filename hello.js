let bomba = document.querySelector('h1')
const ficha = () => {
    if (bomba.innerHTML == "Ivant Vasilev aka Number One, Top 1") {
        bomba.innerHTML = "fuck you"
        bomba.style.width = "auto"
        bomba.style.marginRight = "370px"
    } else {
        bomba.innerHTML = "Ivant Vasilev aka Number One, Top 1"
        bomba.style.width = "auto"
        bomba.style.marginRight = "-55px"
        }
}
bomba.addEventListener("click", ficha)

