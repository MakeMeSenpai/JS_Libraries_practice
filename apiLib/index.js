if (typeof document !== 'undefined') {
    // Get Element references
    var temp = document.getElementById('temp');
    var desc = document.getElementById('desc');
    var form = document.getElementById('form');
    var zip = document.getElementById('zip');
    // Define event listeners
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        /**
         * DOM function
         */
        zip = zip.value
        getWeather(zip).then(function (json) {
            temp.innerHTML = json.main.temp;
            desc.innerHTML = json.weather[0].description;
        })["catch"](function (error) { console.log(error); });
    });
    /**
     * @name getWeather is our main event listener
     * @param zip takes type string of zip code
     * @return Promise, taking api elements, or catching error
     */
    function getWeather(zip) {
        // const apiKey:string = process.env.APIKEY
        var path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=c9f2384035495137f5ce5715af3bb404&units=imperial`;
        var p = fetch(path); // returns a promise
        console.log(path)
        var json = p.then(function (res) { return res.json(); });
        // make a better JSON return
        return json;
    }
}
