var getMaxProfit = function(arr) {
  var diff;
  var sort_array = arr.slice();
  sort_array.sort((a,b)=>a-b);
  var min_idx = arr.indexOf(sort_array[0]);
  var new_array = arr.slice(min_idx+1);
  if (new_array.length == 0)
    diff = -1;
  else {
    new_array.sort((a,b)=>a-b);
    diff = new_array[new_array.length-1] - sort_array[0];
  }
  var prev = arr.splice(0,min_idx);
  if (prev.length == 0)
    return diff;
  var next_diff = getMaxProfit(prev);
  return diff > next_diff ? diff : next_diff;
};

module.exports = getMaxProfit;
