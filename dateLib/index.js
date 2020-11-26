class D {
	constructor(...args) {
		this.date = new Date(...args)
    }
    
    get year() {
        return this.date.getFullYear()
    }

    get month() {
        const num = this.date.getMonth()
        let month = "January"
        if (num == 1) {
            month = "Febuary"
        } else if (num == 2) {
            month = "March"
        } else if (num == 3) {
            month = "April"
        } else if (num == 4) {
            month = "May"
        } else if (num == 5) {
            month = "June"
        } else if (num == 6) {
            month = "July"
        } else if (num == 7) {
            month = "August"
        } else if (num == 8) {
            month = "September"
        } else if (num == 9) {
            month = "October"
        } else if (num == 10) {
            month = "November"
        } else if (num == 11) {
            month = "December"
        }
        return month
    }

    get day() {
        return this.date.getDay()
    }

    get hours() {
        return this.date.getHours()
    }

    get mins() {
        return this.date.getMinutes()
    }

    get secs() {
        return this.date.getSeconds()
    }
}

const e = new D('9/26/1965') // Create a date from a string
const f = new D(1970, 1, 1, 0, 0, 0)

const d = new D()

console.log(d.year)  // 2019 fullYear
console.log(d.month) // July 6
console.log(d.day)   // 27
console.log(d.hours) // 18
console.log(d.mins)  // 6
console.log(d.secs)  // 5
