
function copyCSS() {
    navigator.clipboard.writeText("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css");
    alert("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css copié !");
}

function copyJS() {
    navigator.clipboard.writeText("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
    alert("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js copié !");

}

function myFunction() {
    let element = document.body;
    let tab = document.querySelectorAll('.light');
    element.classList.toggle("light-1");
    element.classList.toggle("light-color-1");
    
    for (let i = 0; i < tab.length;i++) {
        tab[i].classList.toggle("light-2");
        tab[i].classList.toggle("light-color-1");
    }
}
