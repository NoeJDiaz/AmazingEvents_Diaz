import data from "./amazing.js"

function fillCard(image, name, date, description) {
  let card = (`<div class="card1">
            <img class="foto" src="${image}" width="300" height="300" alt=" concierto">

            <h2 class="titulo">${name}</h2>
             <p class="texto">
                ${description}
            </p>
            <div class="acceso">
                <p class="codigo">${date}</p>
                 <button class="btn btn1 btn-outline-danger " type="submit">Search</button>
            </div>
            </div>`)

  return card;

}
// recibe todos los eventos y la fecha comparada
function dateEvents(events, date) {
  //  array me va a guardar las card filtradas por la fecha y completas con los datos
  let filterEvents = [];
  // recorre cada uno de los eventos(array)    
  for (const event of events) {

    //separa los eventos filtrados
    let newCard = fillCard(event.image, event.name, event.date, event.description)
    // guarda los eventos en el array
    filterEvents.push(newCard)


  }
  //retorta el array nuevo
  return filterEvents;
}




//recibe toda la data
function rendercard(dataEvents) {
  //selecciona el div que contiene las cards
  let cardss = document.getElementById('cardss')
  // me guarda al array // me devuelve el array de eventos filtrados con la informacion completa
  let cards = dateEvents(dataEvents.events, dataEvents.currentDate);
  // recorre cada card
  for (const card of cards) {

    let newDiv = document.createElement('div')

    cardss.innerHTML += card;

  }

}




rendercard(data);