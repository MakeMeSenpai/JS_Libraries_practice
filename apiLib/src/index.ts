// to run $tsc index.ts
// to create js file $npx tsc src/index.ts
// Developer Code
// declare function require(name:string): any;
// require('dotenv').config();

/**
 * @class weather holds our main functionality
 * @param zip takes type string of zip code
 */
enum Unit{
    imperial = "imperial",
    metric = "metric"
}
class Weather {
    apiKey: string
    unit: Unit
	constructor(apiKey:string, unit:Unit=Unit.imperial) {
        // const apiKey:string = process.env.APIKEY
        this.apiKey = apiKey
        this.unit = unit
    }

    /**
     * Make a new instance of class const myWeather = new Weather(myAPIKey, Unit:optional)
     * myWeather.callZip(myZip).then((json) => {
     *      json.temp
     * }).catch((error) => {console.log(`In method temp(line 34): ${error}`)})
     */
    async callZip(zip:string) {
        // https://api.openweathermap.org/data/2.5/weather?zip=94108&appid=c9f2384035495137f5ce5715af3bb404&units=imperial
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${this.apiKey}&units=${this.unit}`;
        const res = await fetch(path)
        const json = await res.json()
        return {
            temp: json.main.temp,
            desc: json.weather[0].description,
            feelsLike: json.main.feels_like,
            icon: "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png",
            max: json.main.temp_max,
            min: json.main.temp_min,
            // windDisplay: json.wind.speed, + json.wind.deg, // figure out how degrees relate to N-E-S-W
            humidity: json.main.humidity,
            visibility: json.visibility,
            // sunrise: json.sys.sunrise, // return new Date(sunrise * 1000)
            // sunset: json.sys.sunset, 
            city: json.name,
            country: json.sys.country,
            coords: `Lon: ${json.coord.lon}, Lat: ${json.coord.lat}`
        }
    }
}

/* EXAMPLE */
if (typeof document !== 'undefined') {
    // Get Element references
    const form = document.getElementById('form')
    const tempDisplay = document.getElementById('temp')
    const descDisplay = document.getElementById('desc')
    const feelsDisplay = document.getElementById('feels')
    const iconDisplay = document.getElementById('icon')
    const maxDisplay = document.getElementById('max')
    const minDisplay = document.getElementById('min')
    // const windsDisplay = document.getElementById('winds')
    const humidDisplay = document.getElementById('humid')
    const visualDisplay = document.getElementById('visual')
    // const riseDisplay = document.getElementById('rise')
    // const setDisplay = document.getElementById('set')
    const cityDisplay = document.getElementById('city')
    const countryDisplay = document.getElementById('country')
    const coordDisplay = document.getElementById('coord')

    // listens for whatever zip user inputs
    var zip = (<HTMLInputElement><unknown>document.getElementById('zip'))

    // Define event listener
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // creates a new instance of weather
        const w = new Weather('c9f2384035495137f5ce5715af3bb404')
        //collects necessary elements from API and edits Dom
        w.callZip(zip.value).then((json) => {
            tempDisplay.innerHTML = json.temp;
            descDisplay.innerHTML = json.desc;
            feelsDisplay.innerHTML = json.feelsLike;
            iconDisplay.innerHTML = `<img src=${json.icon}>`;
            maxDisplay.innerHTML = json.max;
            minDisplay.innerHTML = json.min;
            // windsDisplay.innerHTML = json.windDisplay
            humidDisplay.innerHTML = json.humidity;
            visualDisplay.innerHTML = json.visibility;
            // riseDisplay.innerHTML = json.sunrise
            // setDisplay.innerHTML = json.sunset
            cityDisplay.innerHTML = json.city;
            countryDisplay.innerHTML = json.country;
            coordDisplay.innerHTML = json.coords;
        }).catch((error) => {console.log(`In method temp(line 34): ${error}`)})
    })
}