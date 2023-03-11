import data from "./amazing.js"

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const event = data.events.find(card => card._id === Number(id))

const div = document.getElementById("card2")
div.innerHTML = `
<img class="foto2" src="${event.image}" width="300" height="300" alt=" concierto">
<div class="event">
  <h2 class="titulo2">${event.name}</h2>
  <div class="texto2">
    <p class="desc"><span>Date: </span>${event.date}</p>
    <p class="desc"><span>Description: </span>${event.description}</p>
    <p class="desc"><span>Category: </span>${event.category}</p>
    <p class="desc"><span>Place: </span>${event.place}</p>
    <p class="desc"><span>Capacity: </span>${event.capacity}</p>
    <p class="desc"><span>Assistance: </span>${event.assistance}</p>
    <p class="desc"><span>Price: </span>${event.price}</p>
  </div>
</div>`