var getMaxProfit = require('./stock-price');

var prices = process.argv.slice(2);

console.log(getMaxProfit(prices));
