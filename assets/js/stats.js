//import data from "./amazing.js"
async function obtenerData() {
    let data = await fetch("/assets/data/amazing.json")
        .then(response => response.json())

    return data

    //mostrarCards(data)
    //console.log(data);

}
let data = await obtenerData()



const events = data.events
let currentDate = data.currentDate

function atendance(capacity, assistance) {
    return ((assistance / capacity) * 100)
}
let min = ''
let max = ''
let maxA = 0
let minA = 0
let maxCNum = 0
let maxC = ''

function First(array) {
    array.forEach(event => {
        if (event.capacity > maxCNum) {
            maxC = event.name
            maxCNum = event.capacity
        }
        let atendances = atendance(event.capacity, event?.assistance || event?.estimate)
        if (atendances > maxA) {
            max = event.name
            maxA = atendances
        }
        if (atendances < minA || minA === 0) {
            min = event.name
            minA = atendances
        }

    });
    return { max, min, maxC }
}


function revenues(price, assistance) {
    return price * assistance
}



function second(array) {
    let filterEventsPast = array.filter((event) => (new Date(event.date).getTime() < new Date(currentDate).getTime()))
    let body3 = document.getElementById('body3')
    let reviewedCategory = []

    let filtercategory = filterEventsPast.map(event => {
        let eventCategory = filterEventsPast.filter(past => past.category === event.category && !reviewedCategory.includes(event.category))
        reviewedCategory.push(event.category)
        if (!eventCategory.length) return;
        console.log(eventCategory);
        return {
            category: event.category,
            revenue: eventCategory.reduceRight((acc,current)=> acc + revenues(current.price, current.assistance),0),
            atendances:  (eventCategory.reduceRight((acc,current)=> acc + atendance(current.capacity, current.assistance),0)/eventCategory.length).toFixed(2)
            }
    } ).filter(Boolean);
   return filtercategory.forEach(event => dibujaarTr(event,body3))
    
}


function third(array) {
    let filterEventsUpcoming = array.filter((event) => (new Date(event.date).getTime() > new Date(currentDate).getTime()))
    let body2 = document.getElementById('body2')
    let reviewedCategory = []

    let filtercategory = filterEventsUpcoming.map(event => {
        let eventCategory = filterEventsUpcoming.filter(upcoming=> upcoming.category === event.category && !reviewedCategory.includes(event.category))
        reviewedCategory.push(event.category)
        if (!eventCategory.length) return;
        console.log(eventCategory);
        return {
            category: event.category,
            revenue: eventCategory.reduceRight((acc,current)=> acc + revenues(current.price, current.estimate),0),
            atendances:  (eventCategory.reduceRight((acc,current)=> acc + atendance(current.capacity, current.estimate),0)/eventCategory.length).toFixed(2)
            }
    } ).filter(Boolean);
   return filtercategory.forEach(event => dibujaarTr(event,body2))
    
}


let body1 = document.getElementById('body1')



function dibujaarTr(datos, container) {
    let tr = document.createElement('tr')
    for (let clave in datos) {

        let td = document.createElement('td')
        td.innerHTML = datos[clave]
        tr.appendChild(td)
    }
    container.appendChild(tr)
}



dibujaarTr(First(events), body1)
second(events)
third(events)
/*





let filterCat = prompt('ingrese un color');
switch (category) {
    case 'Food': 
        let ; 
        break;
    case 'Books': 
        console.log("color de la naturaleza");
        break;
    case 'Party': 
        console.log("color del agua");
        break;
    case 'Race': 
        console.log("color del sol"); 
        break;
    case 'Concert':
        console.log("color del fuego"); 
        break;
    case 'Museum':
        console.log("color de la tierra"); 
        break;
    default:
        console.log("excelente eleccion no lo teniamos pensado");
        break;
}
*/
