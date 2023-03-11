import data from "./amazing.js"

let events = data.events


let cardss = document.getElementById('cardss')

events.forEach((card) => {

    cardss.innerHTML += `<div class="card1">
    <img class="foto" src="${card.image}" width="300" height="300" alt=" concierto">

    <h2 class="titulo">${card.name}</h2>
     <p class="texto">
        ${card.description}
    </p>
    <div class="acceso">
        <p class="codigo">${card.date}</p>
         <button  class="btn btn1 btn-outline-danger " type="submit"><a class="search" href="./details.html?id=${card._id}" >Search</a></button>
    </div>
    </div>`
})