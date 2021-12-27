function sumOfAllEvenNumbers(nums) {
  let count = 0;  //count variable that is set initially to 0
  for(let i = 0; i < nums.length; i ++){
  if(nums[i] % 2 == 0){   //traverses the nums array and checks if the element in the array is an even value, using modulo
  count ++;  //increments count when an even number is found
  }
}
return count;  //returns the final count value, which is the number of even values in the array
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
