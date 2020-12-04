// ------------------------------------------------------
// Developer Code
require('../dotenv').config();
// Get Element refererences
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var form = document.getElementById('form');
var zipInput = document.getElementById('zip');
// Define event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var zip = zipInput.value;
    getWeather(zip).then(function (json) {
        temp.innerHTML = json.main.temp;
        desc.innerHTML = json.weather[0].description;
    })["catch"](function (error) { console.log(error); });
});
function getWeather(zip) {
    var apiKey = process.env.API_KEY;
    var units = 'imperial';
    var path = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + apiKey + "&units=" + units;
    var p = fetch(path); // returns a promise
    var json = p.then(function (res) { return res.json(); });
    // make a better JSON return
    return json;
}
