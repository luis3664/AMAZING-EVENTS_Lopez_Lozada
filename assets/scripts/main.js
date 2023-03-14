// Variables
let cardsElement = document.getElementById(`cards`);
let card = {
    id: null,
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
                    <a href="./details.html?id=${this.id}" class="col btn text-black p-1">Details</a>
                </div>
            </div>
        </article>
    `}
};
let checkboxs = document.getElementById(`checkboxs`);
let searcher = document.forms[0];



// Main
bucleOfElement(cardsElement, data.events, card);

checkboxs.addEventListener(`change`, () => {
    let cardsFilter = filterByForm(data.events);

    bucleOfElement(cardsElement, cardsFilter, card);
});

searcher.addEventListener(`keyup`, () => {
    let cardsFilter = filterByForm(data.events);

    bucleOfElement(cardsElement, cardsFilter, card);
});

searcher.addEventListener(`submit`, e => e.preventDefault());




// Funtions

function bucleOfElement(container, arrayData, element) {
    if (arrayData.length > 0) {
        let htmlComplete = arrayData.reduce( (accumulator, currentElement) => {
                    element.id = currentElement[`_id`];
                    element.name = currentElement.name;
                    element.image = currentElement.image;
                    element.description = currentElement.description;
                    element.price = currentElement.price;
            
                    return accumulator += element.element();
        }, ``);
    
        container.innerHTML = htmlComplete;
    } else {
        container.innerHTML = `<article> <h2 class="text-center">Not Found</h2> </article>`;
    }
};

function filterByForm(arrayData) {
    let arrayNew = arrayData;

    arrayNew = filterByCheckbox(arrayData);
    arrayNew = filterBySearcher(arrayNew);
    
    return arrayNew;
};

function filterByCheckbox(arrayData) {
    let arrayNew = arrayData;
    let checkboxs = Array.from(document.querySelectorAll(`input[type='checkbox']`));
    let checkboxsChecked = checkboxs.filter(item => item.checked);

    if (checkboxsChecked.length > 0) {
        arrayNew = checkboxsChecked.reduce((accumulator, currentElement) => {
            return accumulator.concat(arrayData.filter(item => currentElement.value == item.category))
        },[]);
    }

    return arrayNew;
};

function filterBySearcher(array) {
    let arrayNew = array;
    let stringFilter = document.querySelector(`input[type='search']`);

    if (stringFilter != ``) {
        arrayNew = arrayNew.filter(item => item.name.toLowerCase().includes(stringFilter.value.toLowerCase()));
    }

    return arrayNew;
};