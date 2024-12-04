let bobas = document.getElementsByClassName("boba");
let hideText = document.getElementsByClassName("hiddenText");
const showMeText = element => {
    if (element.style.display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = 'block'; 
    }
};

Array.from(bobas).forEach((element, index) => {
    element.addEventListener("click", function () {
        showMeText(hideText[index]); // Показать/скрыть соответствующий текст
    });
});


function updateTime() {
    let span = document.getElementById('fuckdata');
    const startDate = new Date(2024, 11, 4);
    let datachas = new Date
    let diff = Math.floor((datachas - startDate) / 1000)
    span.innerHTML = diff + " "
}

setInterval(updateTime, 1000);
updateTime()



