var checkdate = new Date()

// console.log(checkdate.getDate())
// console.log(checkdate.getMonth())

var sysDate = checkdate.getDate()
var sysMonth = checkdate.getMonth()
var sysYear = checkdate.getFullYear()
var fullDate = sysDate + '/' + eval(sysMonth + 1) + '/' + sysYear // 12 - 11 - 2021
//document.querySelector('.displayDate').innerHTML = fullDate
console.log(fullDate);

setInterval(() => {
    var checkDate = new Date()  //local scope variable
    var myTime = checkDate.toLocaleTimeString()
    document.querySelector('.displayTime').innerHTML = myTime
  }, 1000)
