# stock-price

This module will take an array of stock prices in chronological order and return the greatest profit that could be made by buying and selling at the right time

# Usage

Here is an example of how to use the [stock-price](stock-price.js) module:

    var getMaxProfit = require('./stock-price');
    
    var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
    var result = getMaxProfit(stockPricesYesterday);
    // result will be 6

The [index.js](index.js) module exists to try out the [stock-price](stock-price.js) module. This can be run with the following:

    npm start <first number> <second number> ...

**NOTE:** If no profit can be made from the list of existing numbers, a -1 will be returned.
