class D {
	constructor(...args) {
        this.date = new Date(...args);
        this.current = new Date();
    }
    
    get year() {
        return this.date.getFullYear()
    }

    get month() {
        const num = this.date.getMonth();
        let month = "January";
        if (num == 1) {
            month = "Febuary";
        } else if (num == 2) {
            month = "March";
        } else if (num == 3) {
            month = "April";
        } else if (num == 4) {
            month = "May";
        } else if (num == 5) {
            month = "June";
        } else if (num == 6) {
            month = "July";
        } else if (num == 7) {
            month = "August";
        } else if (num == 8) {
            month = "September";
        } else if (num == 9) {
            month = "October";
        } else if (num == 10) {
            month = "November";
        } else if (num == 11) {
            month = "December";
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

    format(str = "") {
        let new_str = `${this.year} ${this.month} ${this.day}`;
        if (str != "") {
            str = str.toLowerCase();
            const temp_str = str.split("");
            new_str = [];
            for (let l=0; l < temp_str.length; l++) {
                if (str[l] == "y") {
                    new_str.push(this.year);
                } else if (str[l] == "m") {
                    new_str.push(this.month);
                } else if (str[l] == "d") {
                    new_str.push(this.day);
                } else if (str[l] == "h") {
                    new_str.push(this.hours);
                } else if (str[l] == "i") {
                    new_str.push(this.mins);
                } else if (str[l] == "s") {
                    new_str.push(this.secs);
                } else {
                    new_str.push(str[l]);
                }
            }
            new_str = new_str.join("");
        }
        return new_str
    }

    when() {
        const str = []; // `${years}, ${months}, ${days}, ${message}`

        const years = Math.abs(this.year - this.current.getFullYear());
        const months = Math.abs(this.date.getMonth() - this.current.getMonth());
        const days = Math.abs(this.day - this.current.getDay());
        // if there is a difference in years
        if (years != 0) {
            // add an s or not
            if (years == 1) {
                str.push(`${years} year`);
            } else {
                str.push(`${years} years`);
            }     
            // check if there are only months      
            if (months != 0 && days == 0) {
                // add and or not, add s or not
                if (months == 1){
                    str.push(`and ${months} month`);
                } else {
                    str.push(`and ${months} months`);
                }
            // check if there are only days
            }  else if (days != 0 && months == 0) {
                // add and or not, add s or not
                if (days == 1) {
                    str.push(`and ${days} day`);
                } else {
                    str.push(`and ${days} days`);
                }
            }  else if (months != 0){
                // add s or not
                if (months == 1){
                    str.push(`${months} month`);
                } else {
                    str.push(`${months} months`);
                }
                // check if there is a day difference
                if (days != 0){
                    // add and or not, add s or not
                    if (days == 1) {
                        str.push(`and ${days} day`);
                    } else {
                        str.push(`and ${days} days`);
                    }
                }
            }
        }

        // check if there is a month difference
        else if (months != 0){
            // add s or not
            if (months == 1){
                str.push(`${months} month`);
            } else {
                str.push(`${months} months`);
            }
            // check if there is a day difference
            if (days != 0){
                // add and or not, add s or not
                if (days == 1) {
                    str.push(`and ${days} day`);
                } else {
                    str.push(`and ${days} days`);
                }
            }
        }

        // check if there is a day difference
        else if (days != 0) {
            // add s or not
            if (days == 1) {
                str.push(`${days} day`);
            } else {
                str.push(`${days} days`);
            }
        }

        const difference = this.date.getTime() - this.current.getTime();
        if (difference < 0) {
            str.push("ago");
        } else if (difference > 0) {
            str.push("from now");
        } else {
            str.push("today");
        }

        return str.join(" ")
    }
}
let d = new D();

/**
 * This method returns the inputed year
 * @returns {number} this.date's year
 */
console.log(d.year);  // 2019 fullYear
/**
 * This method returns the inputed month
 * @returns {string} this.date's month
 */
console.log(d.month); // July 6
/**
 * This method returns the inputed day
 * @returns {number} this.date's day
 */
console.log(d.day);   // 27
/**
 * This method returns the inputed hour
 * @returns {number} this.date's hour
 */
console.log(d.hours); // 18
/**
 * This method returns the inputed minutes
 * @returns {number} this.date's minutes
 */
console.log(d.mins);  // 6
/**
 * This method returns the inputed seconds
 * @returns {number} this.date's seconds
 */
console.log(d.secs);  // 5

/**
 * This class adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
console.log(d.format());              // 2017 January 02
console.log(d.format('y/m/d'));       // 17/Jan/2
console.log(d.format('H:I:S'));       // 03:04:05
console.log(d.format('h:i:s'));       // 3:4:5
console.log(d.format('Y-M-D h:I:S')); // 2017-January-02 3:04:05 

d = new D('2025'); // black ops 2
console.log(d.when());
d = new D('2018/10/25'); // last break up
console.log(d.when());
d = new D('2019/08/18'); // starting make school
console.log(d.when()); 
d = new D(2019, 0, 2, 3, 4, 5);
console.log(d.when()); // 6 months ago
d = new D(2019, 9, 2, 3, 4, 5);
console.log(d.when()); // 3 months from now
d = new D(2024, 9, 2, 3, 4, 5);
console.log(d.when()); // 5 years from now
d = new D(2019, 6, 30, 3, 4, 5);
console.log(d.when()); // 3 days from now
d = new D();
console.log(d.when()); // today
