function formatDate(userDate) {
  let dateArr = userDate.split('/');
  return dateArr[2] + dateArr[0] + dateArr[1]
}

console.log(formatDate("12/31/2014"));
