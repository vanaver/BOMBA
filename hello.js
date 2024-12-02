let zvanie = document.getElementById("myName");
let stylish = getComputedStyle(zvanie).width
zvanie.onclick = function () {
    this.innerHTML = "You too!"
    this.style.width = stylish
}
console.log(stylish)
