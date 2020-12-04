// A humble String
var str = 'hello world';
// Write a function that uppercases the first character of string
function upperFirst(str) {
    console.log(str)
    var first = str[0].toUpperCase();
    return first + str.slice(1);
}
// Write a function that uppercases the first letter of each word in a string
function upperFirstWord(str) {
    var temp_str = str.split(" ");
    var new_string = [];
    var word = ""
    for (i in temp_str) {
        if (temp_str[i] != " "){
            word = upperFirst(temp_str[i]);
        } else {
            word = " "
        }
        new_string.push(word);
    }
    return new_string.join(" ");
}
// Write a function that uppercases every other letter
function upperEveryOther(str) {
    var count = 1;
    var temp_str = str.split("");
    var new_string = [];
    while (count < str.length + 1) {
        if (count % 2 == 0) {
            new_string.push(temp_str[count - 1]);
        }
        else {
            var upper = temp_str[count - 1].toUpperCase();
            new_string.push(upper);
        }
        count++;
    }
    return new_string.join("");
}
// Write a function that removes all whitespace from a given string
function removeSpace(str) {
    var temp_str = str.split("");
    var new_string = [];
    for (l in str) {
        if (temp_str[l] != " ") {
            new_string.push(temp_str[l]);
        }
    }
    return new_string.join("");
}
// Write a function that removes only the extra whitespace from a given string (example: “ a        b ” → “a b”)
function removeExtraSpace(str) {
    var new_string = str.replace(/\s+/g, ' ').trim();
    return new_string; //.join("")
}
// Write a function that replaces spaces with -
function kabobCase(str) {
    str = removeExtraSpace(str);
    var temp_str = str.split("");
    var new_string = [];
    for (l in str) {
        if (temp_str[l] == " ") {
            new_string.push("-");
        }
        else {
            new_string.push(temp_str[l]);
        }
    }
    return new_string.join("");
}
// Write a function that replaces spaces with _
function snakeCase(str) {
    str = removeExtraSpace(str);
    var temp_str = str.split("");
    var new_string = [];
    for (l in str) {
        if (temp_str[l] == " ") {
            new_string.push("_");
        }
        else {
            new_string.push(temp_str[l]);
        }
    }
    return new_string.join("");
}
// Write a function that changes strings to camelCase
function camelCase(str) {
    str = removeExtraSpace(str);
    var temp_str = str.split(" ");
    var new_string = [];
    for (l in temp_str) {
        if (l == 0) {
            new_string.push(temp_str[l].toLowerCase());
        }
        else {
            new_string.push(upperFirst(temp_str[l]));
        }
    }
    new_string = removeSpace(new_string.join(""));
    return new_string;
}
// Write a function that takes the first char and puts it at the end of the string
function shift(str) {
    var first = str[0];
    return str.slice(1) + first;
}
String.prototype.first = function () {
    return this[0];
};
// All strings now have a new method .first()
// console.log("[Method: String.first]")
// console.log('-----------')
// console.log(str.first())
// Write a String.last method
String.prototype.last = function () {
    return this[this.length - 1];
};
// console.log("[Method: String.last]")
// console.log('-----------')
// console.log(str.last())
// Write a String.AllCaps method
String.prototype.allCaps = function () {
    return this.toUpperCase();
};
// console.log("[Method: String.AllCaps]")
// console.log('-----------')
// console.log(str.AllCaps())

module.exports.upperFirst = upperFirst
module.exports.upperFirstWord = upperFirstWord
module.exports.upperEveryOther = upperEveryOther
module.exports.removeSpace = removeSpace
module.exports.removeExtraSpace = removeExtraSpace
module.exports.kabobCase = kabobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift