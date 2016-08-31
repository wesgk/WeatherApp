
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDateStamp(daysFromToday) {
  var yourDate = new Date(new Date().getTime() + ((daysFromToday * 24) * 60 * 60 * 1000 ));
  return daysOfWeek[yourDate.getDay()] + ', ' + monthsOfYear[yourDate.getMonth()] + ' ' + yourDate.getDate();
}

var dateHelpers = {
  getDateStamp: function (daysFromToday) {
    return getDateStamp(daysFromToday);
  }
}

module.exports = dateHelpers;