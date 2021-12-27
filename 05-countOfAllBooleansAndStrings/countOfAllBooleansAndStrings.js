function countOfAllBooleansAndStrings(arr) {
let count = 0;  //set a num value equal to 0, which will count for boolean and string values
  for(let i = 0; i < arr.length; i++){  
  if((typeof arr[i] == "boolean") || (typeof arr[i] == "string")){   //traverses array, and uses typeof to check if item at index is a boolean, or string
  count ++;  //if boolean or string, increase count by one
  }
}
return count;   //return count
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
