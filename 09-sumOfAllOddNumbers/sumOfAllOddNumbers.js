function sumOfAllOddNumbers(nums) {
  let count = 0;  //count variable that is set initially to 0
  for(let i = 0; i < nums.length; i ++){
  if(nums[i] % 2 == 1){   //traverses the nums array and checks if the element in the array is an odd value, using modulo
  count ++;  //increments count when an odd number is found
  }
}
return count;  //returns the final count value, which is the number of odd values in the array
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
