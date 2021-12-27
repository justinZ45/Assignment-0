function countOfAllIndexMatchingNumbers(nums) {
  let count = 0; //creates a count variable equal to 0
  for(let i = 0; i < nums.length; i++){
  if(nums[i] == i){  //traverses the nums array and checks if the value of the array element is equal to its index
  count ++;  //increments count by one if the array element matches its index
  }
}
return count;  //return the final count, which is the number of elements that match their index
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
