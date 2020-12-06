// to run $tsc index.ts
// to create js file $npx tsc src/index.ts
// Developer Code
// declare function require(name:string): any;
// require('dotenv').config();
if (typeof document !== 'undefined') {
    // Get Element references
    const temp = document.getElementById('temp')
    const desc = document.getElementById('desc')
    const form = document.getElementById('form')
    const zip = (<HTMLInputElement><unknown>document.getElementById('zip')).value

    // Define event listeners
    form.addEventListener('submit', (e) => {
    e.preventDefault()
    /**
     * DOM function
     */
    getWeather(zip).then((json) => {
        temp.innerHTML = json.main.temp
        desc.innerHTML = json.weather[0].description
    })
    .catch((error) => {console.log(error)})
    })
    /**
     * @name getWeather is our main event listener
     * @param zip takes type string of zip code
     * @return Promise, taking api elements, or catching error
     */
    function getWeather(zip:string): Promise<any> {
        // const apiKey:string = process.env.APIKEY
        const path:string = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=c9f2384035495137f5ce5715af3bb404&units=imperial`;
        const p = fetch(path) // returns a promise
        const json = p.then(res => res.json())
        // make a better JSON return
        return json
    }
}
