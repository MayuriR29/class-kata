// function removeProperty(obj, prop) {
//   if (obj[prop]) {
//     delete obj[prop];
//     console.log(obj)
//     return true
//   }
//   return false;
// }
// console.log(removeProperty({ name: 'mayuri', age: 10 }, 'name'))

function formatDate(userDate) {
  var date = new Date(userDate);
  let month = date.getMonth()
  let year = date.getFullYear()
  let day = date.getDay()
  console.log("ster", month, year, day)
  return 1
}
formatDate("12/31/2014")
