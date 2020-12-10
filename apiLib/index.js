// to run $tsc index.ts
// to create js file $npx tsc src/index.ts
// Developer Code
// declare function require(name:string): any;
// require('dotenv').config();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @class weather holds our main functionality
 * @param zip takes type string of zip code
 */
var Unit;
(function (Unit) {
    Unit["imperial"] = "imperial";
    Unit["metric"] = "metric";
})(Unit || (Unit = {}));
var Weather = /** @class */ (function () {
    function Weather(apiKey, unit) {
        if (unit === void 0) { unit = Unit.imperial; }
        // const apiKey:string = process.env.APIKEY
        this.apiKey = apiKey;
        this.unit = unit;
    }
    /**
     * Make a new instance of class const myWeather = new Weather(myAPIKey, Unit:optional)
     * myWeather.callZip(myZip).then((json) => {
     *      json.temp
     * }).catch((error) => {console.log(`In method temp(line 34): ${error}`)})
     */
    Weather.prototype.callZip = function (zip) {
        return __awaiter(this, void 0, void 0, function () {
            var path, res, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + this.apiKey + "&units=" + this.unit;
                        return [4 /*yield*/, fetch(path)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, {
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
                                coords: "Lon: " + json.coord.lon + ", Lat: " + json.coord.lat
                            }];
                }
            });
        });
    };
    return Weather;
}());
/* EXAMPLE */
if (typeof document !== 'undefined') {
    // Get Element references
    var form = document.getElementById('form');
    var tempDisplay_1 = document.getElementById('temp');
    var descDisplay_1 = document.getElementById('desc');
    var feelsDisplay_1 = document.getElementById('feels');
    var iconDisplay_1 = document.getElementById('icon');
    var maxDisplay_1 = document.getElementById('max');
    var minDisplay_1 = document.getElementById('min');
    // const windsDisplay = document.getElementById('winds')
    var humidDisplay_1 = document.getElementById('humid');
    var visualDisplay_1 = document.getElementById('visual');
    // const riseDisplay = document.getElementById('rise')
    // const setDisplay = document.getElementById('set')
    var cityDisplay_1 = document.getElementById('city');
    var countryDisplay_1 = document.getElementById('country');
    var coordDisplay_1 = document.getElementById('coord');
    // listens for whatever zip user inputs
    var zip = document.getElementById('zip');
    // Define event listener
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // creates a new instance of weather
        var w = new Weather('c9f2384035495137f5ce5715af3bb404');
        //collects necessary elements from API and edits Dom
        w.callZip(zip.value).then(function (json) {
            tempDisplay_1.innerHTML = json.temp;
            descDisplay_1.innerHTML = json.desc;
            feelsDisplay_1.innerHTML = json.feelsLike;
            iconDisplay_1.innerHTML = "<img src=" + json.icon + ">";
            maxDisplay_1.innerHTML = json.max;
            minDisplay_1.innerHTML = json.min;
            // windsDisplay.innerHTML = json.windDisplay
            humidDisplay_1.innerHTML = json.humidity;
            visualDisplay_1.innerHTML = json.visibility;
            // riseDisplay.innerHTML = json.sunrise
            // setDisplay.innerHTML = json.sunset
            cityDisplay_1.innerHTML = json.city;
            countryDisplay_1.innerHTML = json.country;
            coordDisplay_1.innerHTML = json.coords;
        })["catch"](function (error) { console.log("In method temp(line 34): " + error); });
    });
}
