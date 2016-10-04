var randomNum = require('./random');
var currency = require('./currency');

exports.twoFunc = function() {
  var number = randomNum(100, 1000000);

  return currency(number);
}
exports.oneFunc = function () {
  return 'Account balance: \n';
}
