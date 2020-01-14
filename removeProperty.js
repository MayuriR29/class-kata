

const  getSum=(id)=>  id.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);

function createCheckDigit(membershipId) {
  let sum=getSum(membershipId)
  while(parseInt(sum)>9)sum=getSum(sum)
  
  console.log(sum)
  return sum;
}

function formatDate(userDate) {
  var date = new Date(userDate);
  let month = date.getMonth()
  let year = date.getFullYear()
  let day = date.getDay()
  console.log("ster", month, year, day)
  return 1
}
formatDate("12/31/2014")
