var getMaxProfit = function(arr) {
  var diff;

  // find the index of the smallest number
  var sort_array = arr.slice();
  sort_array.sort((a,b)=>a-b);
  var min_idx = arr.indexOf(sort_array[0]);
  
  // find the largest number after the smallest and
  // get the difference
  var new_array = arr.slice(min_idx+1);
  if (new_array.length == 0)
    diff = -1;
  else {
    new_array.sort((a,b)=>a-b);
    diff = new_array[new_array.length-1] - sort_array[0];
  }

  // create a new array consisting of the numbers before the smallest
  var prev = arr.slice(0,min_idx);
  if (prev.length == 0)
    return diff;

  // recursively call this function with the new array
  // and compare results
  var next_diff = getMaxProfit(prev);
  return diff > next_diff ? diff : next_diff;
};

module.exports = getMaxProfit;
