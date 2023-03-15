import data from "./amazing.js"

const events = data.events
let currentDate = data.currentDate
//el parametro event es el singular del array recorrido, el cual se lo vuelve a llamar en el filtro.

const cardss = document.getElementById('cardss')

function mostrarCards (array){

    if( array.length == 0){
        cardss.innerHTML = `<h2 class="fw-bolder text-danger "> Oops! No event found with those characteristics, adjust the filters and try again :) </h2>`
        return
    }
    let cardsF =''
    array.forEach((card) => {

    cardsF += `<div class="card1">
    <img class="foto" src="${card.image}" width="300" height="300" alt=" concierto">

    <h2 class="titulo">${card.name}</h2>
     <p class="texto">
        ${card.description}
    </p>
    <div class="acceso">
        <p class="codigo">${card.date}</p>
         <button  class="btn btn1 btn-outline-danger " type="submit"><a class="search" href="./details.html?id=${card._id}" >Details</a></button>
    </div>
    </div>`
}) 
    cardss.innerHTML = cardsF
}
mostrarCards(events)

const contenedorCheck = document.getElementById('inputs-container')


//let eventsFilters = events.filter(event => inputMap.includes(event.categorie))
function crearCheckboxes() {
    //que se muestren solo los checkboxes que tienen eventos asignados
    let filterInputs = events.map(categorys => categorys.category)
    //console.log(filterInputs);
    let setinput= new Set(filterInputs)
    /* console.log(setCountry) */
    let arrayInput = Array.from(setinput)
    
    arrayInput.forEach(category => {
         contenedorCheck.innerHTML += ` <input type="checkbox" name="${category}" value="${category}" id="${category}">
        <label for="${category}">${category}</label>`
     })
    
}
crearCheckboxes()

const search = document.getElementById('search1')
const searchInput = document.getElementById('search')

function filterSearch(events,text){
    let eventsFilter = events.filter(search => search.name.toLowerCase().includes(text.toLowerCase()))
    //console.log(eventsFilter);
    return eventsFilter
}


let checkboxes = document.querySelectorAll("input[type='checkbox']")


function filterInputs(events) {
    let inputsArray = Array.from(checkboxes)
    //console.log(inputsArray);
    let inputsCheked = inputsArray.filter(input => input.checked)
   // console.log(inputsCheked);
    let inputMap = inputsCheked.map(input => input.id)
    //console.log(inputMap);
    let eventsFilters = events.filter(event => inputMap.includes(event.category))
 console.log(eventsFilters);
    if (inputsCheked.length > 0) {
        
        return eventsFilters
    } 

    return events
}


search.addEventListener('submit',Filter)
searchInput.addEventListener('input',Filter)
contenedorCheck.addEventListener('change', Filter)

 export function Filter(e) {
   //console.log(searchInput.value);
    e.preventDefault()
    let First = filterSearch (events,searchInput.value)
    //console.log(First)
    let Second = filterInputs(First)
    mostrarCards(Second)
    
}