

//dichiaro le costanti
const items = document.getElementsByClassName("item");

//imposto l'indice da dover partire
let activeItem = 0;


//navigazione

//prendo in considerazione il bottone next e prev
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

//al click del bottone "next"
next.addEventListener("click", function (){

    if (activeItem < items.length - 1){

        //togliamo la classe active
        items[activeItem].classList.remove("active");
        items[activeItem].classList.add("hidden");

        //incremento dell'indice dell'elemento
        activeItem++

        //aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add("active");
        items[activeItem].classList.remove("hidden");


        if(activeItem === items.length - 1){

            //arrivati all'ultimo elemento
            next.classList.add("hidden")

        }

    }
})




// al click del bottone "prev"
prev.addEventListener("click", function (){

    if (activeItem > 0){

        //togliamo la classe active
        items[activeItem].classList.remove("active");
        items[activeItem].classList.add("hidden");

        //decremento dell'indice dell'elemento
        activeItem--

        //aggiungiamo la classe active all'elemento precedente
        items[activeItem].classList.add("active");
        items[activeItem].classList.remove("hidden");


        if(activeItem === 0){

            //arrivati all'ultimo elemento
            next.classList.add("active");

        }

        next.classList.remove("hidden");

    }

})











