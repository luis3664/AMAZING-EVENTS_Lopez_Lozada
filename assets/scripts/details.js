const params = new URLSearchParams(document.location.search);
const eventId = params.get(`id`);
const eventCard = data.events.find(item => item[`_id`] == eventId);
const title = document.querySelector(`title`);
let containerElement = document.getElementById(`main-details`);
let time = eventCard.date > data.currentDate;

printDetails(containerElement, eventCard, time);



// Functions

function printDetails(container, card, time) {
    if (card != undefined) {
        title.textContent = card.name;
    
        if (time) {
            container.innerHTML = `
                <article class="d-flex px-4 justify-content-center align-items-center flex-column flex-lg-row" id="card-details">
                    <figure class="col-lg-5 col-12" id="figure">
                        <img class="h-100 w-100" src="${card.image}" alt="Food">
                    </figure>
            
                    <div class="col-lg-5 col-12 p-4 d-flex flex-column justify-content-center" id="detailsText">
                        <h5>${card.name}</h5>
                        <p>${card.description} The event will be in ${card.place} and will have a capacity of ${card.capacity} people.</p>
                        <p>The cost per person would be ${card.price}$ and the date is ${card.date}. For more information <a href="./contact.html">contact us.</a></p>
                    </div>
                </article>
            `;
        } else {
            container.innerHTML = `
                <article class="d-flex px-4 justify-content-center align-items-center flex-column flex-lg-row" id="card-details">
                    <figure class="col-lg-5 col-12" id="figure">
                        <img class="h-100 w-100" src="${card.image}" alt="Food">
                    </figure>
            
                    <div class="col-lg-5 col-12 p-4 d-flex flex-column justify-content-center" id="detailsText">
                        <h5>${card.name}</h5>
                        <p>${card.description} The event was in ${card.place} and had an assist of ${card.assistance} people.</p>
                        <p>The cost per person was ${card.price}$ and the date was ${card.date}. For more information <a href="./contact.html">contact us.</a></p>
                    </div>
                </article>
            `;
        }
    } else {
        container.innerHTML = `<article> <h2 class="text-center">Not Found</h2> </article>`;
    }
}