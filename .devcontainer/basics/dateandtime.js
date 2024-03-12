//date is object
// there is a millisecond value which comes when we do date.now
//like when we create a date and want the time we can do .gettime to get the ms value
// when they will introduce temporal then it wi be easy
let mydate = new Date()
console.log(mydate.toLocaleString())
console.log(typeof(mydate))
let createddate = new Date(2023,0,23,5,3)
console.log(createddate.toString())
// if we write inside "" then january will start from month 1
// if it is not starting from "" then january will start from month 0
 let mytimestamp = Date.now()
 console.log(mytimestamp)
 console.log(createddate.getTime())
 // we can get day month and so on