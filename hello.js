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





