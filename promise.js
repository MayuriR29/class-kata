let prom = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('success')
  } else reject('fail')
})
console.log(prom)
