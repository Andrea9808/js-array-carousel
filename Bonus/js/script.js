// dichiaro le costanti
const items = document.querySelectorAll(".item");
const thumbnails = document.querySelectorAll(".thumbnail");
const totalItems = items.length;

// imposto l'indice da dover partire
let activeItem = 0;

// navigazione

// prendo in considerazione il bottone next e prev
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// al click del bottone "next"
next.addEventListener("click", function () {
    //togliamo la classe active
    items[activeItem].classList.remove("active");
    items[activeItem].classList.add("hidden");

    // incremento dell'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem + 1) % totalItems;

    //aggiungiamo la classe active all'elemento successivo
    items[activeItem].classList.add("active");
    items[activeItem].classList.remove("hidden");
});

// al click del bottone "prev"
prev.addEventListener("click", function () {
    //togliamo la classe active
    items[activeItem].classList.remove("active");
    items[activeItem].classList.add("hidden");

    // decremento dell'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem - 1 + totalItems) % totalItems;

    //aggiungiamo la classe active all'elemento precedente
    items[activeItem].classList.add("active");
    items[activeItem].classList.remove("hidden");
});






