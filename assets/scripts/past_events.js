// Variables
let cardsElement = document.getElementById("pastEvent");
let pastEvent = [];
let card = {
    name: ``,
    image: ``,
    description: ``,
    price: 0,
    element: function() { 
        return `
        <article class="card card-home col-3 mb-4">
            <figure>                    
                <img src="${this.image}" class="card-img-top mt-2 img-fluid" alt="${this.name}">
            </figure>
            <div class="card-body pt-1 d-flex justify-content-center align-items-center flex-column">
                <div class="row align-items-center">
                    <h5 class="text-center card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                </div>
        
                <div class="card-end d-flex align-items-center mt-4 w-100">
                    <span class="col me-4">Price: ${this.price}$</span>
                    <a href="./details.html" class="col btn text-black p-1">Details</a>
                </div>
            </div>
        </article>
    `}
};

pastEvent = filterByDate(data.currentDate, data.events, "past");

bucleOfElement(cardsElement, pastEvent, card);



// Funtions

function bucleOfElement (container, arrayData, element) {
    let htmlComplete = ``;

    for (const item of arrayData) {
        element.name = item.name;
        element.image = item.image;
        element.description = item.description;
        element.price = item.price;

        htmlComplete += element.element();
    };
    container.innerHTML = htmlComplete;
};

// Estoy indeciso con el parametro time capaz es mejor un booleano pero capaz a futuro aprendo a mejorarlo
function filterByDate(currentDate, arrayData, time) {
    let newArray = [];

    if (time == "past") {
        for (const data of arrayData) {
            if (data.date < currentDate) {
                newArray.push(data);
            };
        };
    } else {
        for (const data of arrayData) {
            if (data.date > currentDate) {
                newArray.push(data);
            };
        };
    }

    return newArray;
}