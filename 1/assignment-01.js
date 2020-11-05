
// A humble String
const str = 'hello world'

// Strings have a lot in common with Arrays
console.log(str[1])
console.log(str.length)

// Write a function that uppercases the first character of string
function upperFirst(str) {
  const first = str[0].toUpperCase()
  return first + str.slice(1)
}

// Write a function that uppercases the first letter of each word in a string
function upperFirstWord(str) {
  let temp_str = str.split("")
  let first_world = []
  let n = ""
  for (letter in temp_str){
    if (letter != ' '){
      n = temp_str[letter].toUpperCase()
      first_world.push(n)
    } else {
      n = temp_str[letter]
      first_world.push(n)
    }
  }
  temp_str = first_world.join("")
  return temp_str
}

// Write a function that uppercases every other letter

// Write a function that removes all whitespace from a given string

// Write a function that removes only the extra whitespace from a given string (example: “ a        b ” → “a b”)

console.log(upperFirst)
console.log('-----------')
console.log(upperFirst(str))
console.log(upperFirst('abcdefg'))

console.log(upperFirstWord)
console.log('-----------')
console.log(upperFirstWord(str))
console.log(upperFirstWord('abcdefg'))




// Transform a string to uppercase
console.log(str.toUpperCase())

// Split a string into an array of strings
console.log(str.split(' ')) // split on space

// replace one string with another
console.log(str.replace('hello', 'foo'))
// replace 
console.log(str.replace(' ', '-'))
// replaceAll works in the browser not in node! 
console.log(str.replaceAll('l', '1'))

// Strings and arrays don't have all the same methods
// str.push('!') Error push not a function

String.prototype.first = function() {
  return this[0]
}

// All strings now have a new method .first()

console.log(str.first())

// Write a String.last method
String.prototype.last = function() {
  return this[this.length - 1]
}

console.log(str.last())

// Write a String.AllCaps method
String.prototype.AllCaps = function() {
  return this.toUpperCase()
}

console.log(str.AllCaps())