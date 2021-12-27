function countOfAllBooleans(arr) {
  let count = 0;  //set a num value equal to 0, which will count for bool values
  for(let i = 0; i < arr.length; i++){  
  if(typeof arr[i] == "boolean"){   //traverses array, and uses typeof to check if item at that index is a boolean
  count ++;  //if boolean, increase count by one
  }
}
return count;   //return count
}

// Do not edit this line;
module.exports = countOfAllBooleans;
