// to run $tsc index.ts
// to create js file $npx tsc src/index.ts
// Developer Code
// declare function require(name:string): any;
// require('dotenv').config();

/**
 * @class weather holds our main functionality
 * @param zip takes type string of zip code
 */
class weather {
    zip: string
    path: string
    p:any
    json:any
	constructor(zip:string) {
        // const apiKey:string = process.env.APIKEY
        this.zip = zip
        this.path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=c9f2384035495137f5ce5715af3bb404&units=imperial`;
        this.promise(this.zip).then((json) => {
            this.
        }
    }

    /**
     * @method promise() creates promise
     * @return json format
     */
    promise():Promise<any> {
        const p = 
        const 
        return json
    }

    /**
     * @method temp gives us the temperature
     * @return string api message, or console logs catching error
     */
    get temp():any {
        return this.promise().then((json) => {
            return json.main.temp
        }).catch((error) => {console.log(`In method temp(line 34): ${error}`)})
    }

    /**
     * @method desc gives us the description
     * @return string api message, or console logs catching error
     */
    get desc():any {
        return this.promise().then((json) => {
            return json.weather[0].description
        }).catch((error) => {console.log(`In method desc(line 44): ${error}`)})
    }

    /**
     * @method feelsLike gives us what temperature it feels like
     * @return string api message, or console logs catching error
     */
    get feelsLike():any {
        return this.promise().then((json) => {
            return json.main.feels_like
        }).catch((error) => {console.log(`In method feelsLike(line 54): ${error}`)})
    }
    
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
    get max():any {
       return this.promise().then((json) => {
            return json.main.temp_max
        }).catch((error) => {console.log(`In method max(line 74): ${error}`)})
    }
  
    /**
     * @method min gives us today's lowest temperature
     * @return string api message, or console logs catching error
     */
    get min():any {
       return this.promise().then((json) => {
            return json.main.temp_min
        }).catch((error) => {console.log(`In method min(line 84): ${error}`)})
    }
    
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
    get humidity():any {
        return this.promise().then((json) => {
            return json.main.humidity
        }).catch((error) => {console.log(`In method humidity(line 105): ${error}`)})
    }
    
    /**
     * @method visibility gives us todays clarity
     * @return string api message, or console logs catching error
     */
    get visibility():any {
        return this.promise().then((json) => {
            return json.visibility
        }).catch((error) => {console.log(`In method visibility(line 115): ${error}`)})
    }
    
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
    givenZip():any {
        return this.promise().then((json) => {
            return this.zip
        }).catch((error) => {console.log(`In method temp(line 149): ${error}`)})
    }

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
    get city():any {
        return this.promise().then((json) => {
            return json.name
        }).catch((error) => {console.log(`In method temp(line 180): ${error}`)})
    }
    
    /**
     * @method country gives us object's country
     * @return string api message, or console logs catching error
     */
    get country():any {
        return this.promise().then((json) => {
            return json.sys.country
        }).catch((error) => {console.log(`In method temp(line ): ${error}`)})
    }
    
    /**
     * @abstract idea
     * @method coords gives us objects coordinates
     * @return string api message, or console logs error
     */
    // get coords():any {
    //     return this.promise().then((json) => {
    //         return json.coord.lon //longitude
    //         return json.coord.lat //latitude
    //     }).catch((error) => {console.log(`In method temp(line 30): ${error}`)})
    // }
}

/* EXAMPLE */
if (typeof document !== 'undefined') {
    // Get Element references
    const form = document.getElementById('form')
    const tempDisplay = document.getElementById('temp')
    const descDisplay = document.getElementById('desc')
    const feelsDisplay = document.getElementById('feels')
    // const iconDisplay = document.getElementById('icon')
    const maxDisplay = document.getElementById('max')
    const minDisplay = document.getElementById('min')
    // const windsDisplay = document.getElementById('winds')
    const humidDisplay = document.getElementById('humid')
    const visualDisplay = document.getElementById('visual')
    // const riseDisplay = document.getElementById('rise')
    // const setDisplay = document.getElementById('set')
    const ourZip = document.getElementById('our')
    // const newZip = document.getElementById('new')
    // const oldZip = document.getElementById('old')
    const cityDisplay = document.getElementById('city')
    const countryDisplay = document.getElementById('country')
    // const coordDisplay = document.getElementById('coord')

    // listens for whatever zip user inputs
    const zip = (<HTMLInputElement><unknown>document.getElementById('zip'))

    // Define event listener
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // creates a new instance of weather
        const w = new weather(zip.value)
        // Edits Dom
        tempDisplay.innerHTML = w.temp
        descDisplay.innerHTML = w.desc
        feelsDisplay.innerHTML = w.feelsLike
        // iconDisplay.innerHTML = w.icon
        maxDisplay.innerHTML = w.max
        minDisplay.innerHTML = w.min
        // windsDisplay.innerHTML = w.winds
        humidDisplay.innerHTML = w.humidity
        visualDisplay.innerHTML = w.visibility
        // riseDisplay.innerHTML = w.sunrise
        // setDisplay.innerHTML = w.sunset
        ourZip.innerHTML = w.givenZip()
        // newZip.innerHTML = w.changeZip(94108)
        // oldZip.innerHTML = w.revertZip()
        cityDisplay.innerHTML = w.city
        countryDisplay.innerHTML = w.country
        // coordDisplay.innerHTML = w.coords
    })
}