

// Dichiaro le costanti
const items = document.querySelectorAll(".item");
const totalItems = items.length;

// Imposto l'indice da dover partire
let activeItem = 0;

// Navigazione

// Prendo in considerazione il bottone next e prev
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Al click del bottone "next"
next.addEventListener("click", function () {
    // Nascondiamo l'elemento attivo corrente
    items[activeItem].classList.remove("active");
    items[activeItem].classList.add("hidden");

    // Incremento dell'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem + 1) % totalItems;

    // Mostriamo l'elemento successivo
    items[activeItem].classList.add("active");
    items[activeItem].classList.remove("hidden");
});




// Al click del bottone "prev"
prev.addEventListener("click", function () {
    // Nascondiamo l'elemento attivo corrente
    items[activeItem].classList.remove("active");
    items[activeItem].classList.add("hidden");

    // Decremento dell'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem - 1 + totalItems) % totalItems;

    // Mostriamo l'elemento precedente
    items[activeItem].classList.add("active");
    items[activeItem].classList.remove("hidden");
});

















