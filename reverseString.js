const reverseString = (inputString) => {

  return inputString.split('').reverse().join('')

}
// console.log(reverseString('hello'))

const palindrome = (inputString) => {
  const reg = /[\W_]/g;
  let strGiven = inputString.toLowerCase().replace(reg, "")//remove special characters in given string
  if (strGiven.split('').reverse().join('') === strGiven) return true
  return false

}
// console.log(palindrome('hi ih'))

//longest word
const findLongestWord = (stringGiven) => {
  const obj = stringGiven.split(' ').reduce((acc, val, index) => {
    acc[val] = val.length
    return acc
  }, {})
  const maxLength = Math.max(...Object.values(obj))
  return Object.keys(obj).find(key => obj[key] === maxLength)
}
console.log(findLongestWord('hi hello how'))
