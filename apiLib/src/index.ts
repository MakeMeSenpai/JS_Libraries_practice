// ------------------------------------------------------
// Developer Code
require('../dotenv').config();

// Get Element refererences
const temp = document.getElementById('temp')
const desc = document.getElementById('desc')
const form = document.getElementById('form')
const zipInput = document.getElementById('zip')

interface htmlTagMap {
    temp:HTMLElement,
    desc:HTMLElement,
    form:HTMLElement,
    zipInput:HTMLElement,
}

// Define event listeners
form.addEventListener('submit', (e) => {
e.preventDefault()
const zip:number = zipInput.value

getWeather(zip).then((json) => {
    temp.innerHTML = json.main.temp
    desc.innerHTML = json.weather[0].description
})
.catch((error) => {console.log(error)})
})

function getWeather(zip:number) {
    const apiKey:string = process.env.API_KEY
    const units:string = 'imperial'
    const path:string = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const p = fetch(path) // returns a promise
    const json = p.then(res => res.json())
    // make a better JSON return
    return json
}