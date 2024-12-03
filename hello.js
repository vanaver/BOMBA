let boba = document.getElementById('nigga')
let hideText = document.getElementById("hiddenText")
boba.addEventListener('click', function () {
    if (hideText.style.display == "block") {
        hideText.style.display = "none";
    } else {
        hideText.style.display = 'block'; 
    }
})

