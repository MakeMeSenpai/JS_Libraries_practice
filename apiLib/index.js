/**
 * @class weather holds our main functionality
 * @param zip takes type string of zip code
 */
var weather = /** @class */ (function () {
    function weather(zip) {
        this.zip = zip;
        this.path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=c9f2384035495137f5ce5715af3bb404&units=imperial`;
        console.log(`zipperoini ${this.path}`)
    }
    /**
     * @method promise() creates promise
     * @return json format
     */
    weather.prototype.promise = function () {
        var p = fetch(this.path);
        var json = p.then(function (res) { return res.json(); });
        return json;
    };
    Object.defineProperty(weather.prototype, "temp", {
        /**
         * @method temp gives us the temperature
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.main.temp;
            })["catch"](function (error) { console.log("In method temp(line 34): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "desc", {
        /**
         * @method desc gives us the description
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.weather[0].description;
            })["catch"](function (error) { console.log("In method desc(line 44): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "feelsLike", {
        /**
         * @method feelsLike gives us what temperature it feels like
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.main.feels_like;
            })["catch"](function (error) { console.log("In method feelsLike(line 54): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "max", {
        /**
         * @abstract idea
         * @method icon gives us a weather icon
         * @return string api message, or console logs catching error
         */
        // get icon():any {
        //     return this.promise().then((json) => {
        //         return json.weather[0].icon // how to display api icon?
        //     }).catch((error) => {console.log(`In method icon(line 48): ${error}`)})
        // }
        /**
         * @method max gives us today's highest temperature
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.main.temp_max;
            })["catch"](function (error) { console.log("In method max(line 74): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "min", {
        /**
         * @method min gives us today's lowest temperature
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.main.temp_min;
            })["catch"](function (error) { console.log("In method min(line 84): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "humidity", {
        /**
         * @abstract idea
         * @method winds gives us the wind speeds and direction of wind
         * @return string api message, or console logs catching error
         */
        // get winds():any {
        //    return this.promise().then((json) => {
        //         return json.wind.speed
        //         return json.wind.deg // figure out how degrees relate to N-E-S-W
        //     }).catch((error) => {console.log(`In method winds(line 30): ${error}`)})
        // }
        /**
         * @method humidity gives us humidity levels
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.main.humidity;
            })["catch"](function (error) { console.log("In method humidity(line 105): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "visibility", {
        /**
         * @method visibility gives us todays clarity
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.visibility;
            })["catch"](function (error) { console.log("In method visibility(line 115): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @abstract idea
     * @method sunrise gives us the time of today's sunrise
     * @return string api message, or console logs catching error
     */
    // get sunrise():any {
    //     return this.promise().then((json) => {
    //         return json.sys.sunrise // return new Date(sunrise * 1000)
    //     }).catch((error) => {console.log(`In method temp(line ?): ${error}`)})
    // }
    /**
     * @abstract idea
     * @method sunset gives us the time of today's sunset
     * @return string api message, or console logs catching error
     */
    // get sunset():any {
    //     return this.promise().then((json) => {
    //         return json.sys.sunset
    //     }).catch((error) => {console.log(`In method temp(line ?): ${error}`)})
    // }
    /**
     * @method givenZip() gives us the objects zip code
     * @return string api message, or console logs catching error
     */
    weather.prototype.givenZip = function () {
        var _this = this;
        return this.promise().then(function (json) {
            return _this.zip;
        })["catch"](function (error) { console.log("In method temp(line 149): " + error); });
    };
    Object.defineProperty(weather.prototype, "city", {
        /**
         * @abstract idea
         * @method changeZip() changes the objects zip
         * @param newZip @type string
         * currentZip = newZip 92103 = 30219 -> 30219
         * @return string api message, or console logs catching error
         */
        // changeZip(newZip:string):none {
        // changes current zip code to newZip code
        // }
        /**
         * @abstract idea
         * @method revertZip() reverts to last saved zip
         * currentZip = lastZip 30219 = 92103 -> 92103
         * @return string api message, or console logs catching error
         */
        // revertZip():none {
        // undo changed zip code to last saved
        // }
        /**
         * @method city gives us object's city
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.name;
            })["catch"](function (error) { console.log("In method temp(line 180): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(weather.prototype, "country", {
        /**
         * @method country gives us object's country
         * @return string api message, or console logs catching error
         */
        get: function () {
            return this.promise().then(function (json) {
                return json.sys.country;
            })["catch"](function (error) { console.log("In method temp(line ): " + error); });
        },
        enumerable: false,
        configurable: true
    });
    return weather;
}());
/* EXAMPLE */
if (typeof document !== 'undefined') {
    // Get Element references
    var form = document.getElementById('form');
    var tempDisplay_1 = document.getElementById('temp');
    var descDisplay_1 = document.getElementById('desc');
    var feelsDisplay_1 = document.getElementById('feels');
    // const iconDisplay = document.getElementById('icon')
    var maxDisplay_1 = document.getElementById('max');
    var minDisplay_1 = document.getElementById('min');
    // const windsDisplay = document.getElementById('winds')
    var humidDisplay_1 = document.getElementById('humid');
    var visualDisplay_1 = document.getElementById('visual');
    // const riseDisplay = document.getElementById('rise')
    // const setDisplay = document.getElementById('set')
    var ourZip_1 = document.getElementById('our');
    // const newZip = document.getElementById('new')
    // const oldZip = document.getElementById('old')
    var cityDisplay_1 = document.getElementById('city');
    var countryDisplay_1 = document.getElementById('country');
    // const coordDisplay = document.getElementById('coord')
    // listens for whatever zip user inputs
    var zip = document.getElementById('zip');
    // Define event listeners and Edits DOM
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // creates a new instance of weather
        var w_1 = new weather(zip.value);
        tempDisplay_1.innerHTML = w_1.temp;
        descDisplay_1.innerHTML = w_1.desc;
        feelsDisplay_1.innerHTML = w_1.feelsLike;
        // iconDisplay.innerHTML = w.icon
        maxDisplay_1.innerHTML = w_1.max;
        minDisplay_1.innerHTML = w_1.min;
        // windsDisplay.innerHTML = w.winds
        humidDisplay_1.innerHTML = w_1.humidity;
        visualDisplay_1.innerHTML = w_1.visibility;
        // riseDisplay.innerHTML = w.sunrise
        // setDisplay.innerHTML = w.sunset
        ourZip_1.innerHTML = w_1.givenZip();
        // newZip.innerHTML = w.changeZip(94108)
        // oldZip.innerHTML = w.revertZip()
        cityDisplay_1.innerHTML = w_1.city;
        countryDisplay_1.innerHTML = w_1.country;
        // coordDisplay.innerHTML = w.coordinates
    });
}
