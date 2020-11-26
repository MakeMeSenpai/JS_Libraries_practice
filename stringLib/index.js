// A humble String
const str = 'hello world'

// Write a function that uppercases the first character of string
function upperFirst(str) {
  const first = str[0].toUpperCase()
  return first + str.slice(1)
}

// Write a function that uppercases the first letter of each word in a string
function upperFirstWord(str) {
  let temp_str = str.split(" ")
  let new_string = []
  for(i in temp_str){
    word = upperFirst(temp_str[i])
    new_string.push(word)
  }
  return new_string.join(" ")
}

// Write a function that uppercases every other letter
function upperEveryOther(str) {
  let count = 1
  let temp_str = str.split("")
  let new_string = []
  while (count < str.length + 1){
    if (count % 2 == 0){
      new_string.push(temp_str[count-1])
    } else {
      let upper = temp_str[count-1].toUpperCase()
      new_string.push(upper)
    }
    count ++
  }
  return new_string.join("")
}

// Write a function that removes all whitespace from a given string
function removeSpace(str) {
  let temp_str = str.split("")
  let new_string = []
  for (l in str) {
    if (temp_str[l] != " "){
      new_string.push(temp_str[l])
    }
  }
  return new_string.join("")
}

// Write a function that removes only the extra whitespace from a given string (example: “ a        b ” → “a b”)
function removeExtraSpace(str) {
  let new_string = str.replace(/\s+/g,' ').trim();
  return new_string //.join("")
}

// Write a function that replaces spaces with -
function kabobCase(str) {
  str = removeExtraSpace(str)
  let temp_str = str.split("")
  let new_string = []
  for (l in str) {
    if (temp_str[l] == " "){
      new_string.push("-")
    } else {
      new_string.push(temp_str[l])
    }
  }
  return new_string.join("")
}

// Write a function that replaces spaces with _
function snakeCase(str) {
  str = removeExtraSpace(str)
  let temp_str = str.split("")
  let new_string = []
  for (l in str) {
    if (temp_str[l] == " "){
      new_string.push("_")
    } else {
      new_string.push(temp_str[l])
    }
  }
  return new_string.join("")
}

// Write a function that changes strings to camelCase
function camelCase(str) {
  str = removeExtraSpace(str)
  let temp_str = str.split(" ")
  let new_string = []
  for (l in temp_str) {
    if (l == 0) {
      new_string.push(temp_str[l].toLowerCase())
    } else {
      new_string.push(upperFirst(temp_str[l]))
    }
  }
  new_string = removeSpace(new_string.join(""))
  return new_string
}

// Write a function that takes the first char and puts it at the end of the string
function shift(str){
  const first = str[0]
  return str.slice(1) + first
}

// Strings have a lot in common with Arrays
console.log(str[1])
console.log(str.length)

// Transform a string to uppercase
console.log(str.toUpperCase())

// Split a string into an array of strings
console.log(str.split(' ')) // split on space

// replace one string with another
console.log(str.replace('hello', 'foo'))
// replace 
console.log(str.replace(' ', '-'))
// replaceAll works in the browser not in node! 
// console.log(str.replaceAll('l', '1'))

// Strings and arrays don't have all the same methods
// str.push('!') Error push not a function
console.log('-----------')

console.log(upperFirst)
console.log('-----------')
console.log(upperFirst(str))
console.log(upperFirst('abcdefg'))

console.log(upperFirstWord)
console.log('-----------')
console.log(upperFirstWord(str))
console.log(upperFirstWord('abcdefg'))

console.log(upperEveryOther)
console.log('-----------')
console.log(upperEveryOther(str))
console.log(upperEveryOther('abcdefg'))

console.log(removeSpace)
console.log('-----------')
console.log(removeSpace(str))
console.log(removeSpace('a b c d e f g'))

console.log(removeExtraSpace)
console.log('-----------')
console.log(removeExtraSpace(str))
console.log(removeExtraSpace('a   b  c  d  e f      g'))

console.log(kabobCase)
console.log('-----------')
console.log(kabobCase(str))
console.log(kabobCase('a   b  c  d  e f      g'))

console.log(snakeCase)
console.log('-----------')
console.log(snakeCase(str))
console.log(snakeCase('a   b  c  d  e f      g'))

console.log(camelCase)
console.log('-----------')
console.log(camelCase(str))
console.log(camelCase('a   b  c  d  e f      g'))

console.log(shift)
console.log('-----------')
console.log(shift(str))
console.log(shift('abcdefg'))



String.prototype.first = function() {
  return this[0]
}

// All strings now have a new method .first()
console.log("[Method: String.first]")
console.log('-----------')
console.log(str.first())

// Write a String.last method
String.prototype.last = function() {
  return this[this.length - 1]
}

console.log("[Method: String.last]")
console.log('-----------')
console.log(str.last())

// Write a String.AllCaps method
String.prototype.AllCaps = function() {
  return this.toUpperCase()
}

console.log("[Method: String.AllCaps]")
console.log('-----------')
console.log(str.AllCaps())
