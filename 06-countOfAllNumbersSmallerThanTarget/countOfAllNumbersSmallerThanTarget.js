function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0  //sets a variable called count equal to 0;
  for(let i = 0; i < nums.length; i++){ 
  if(nums[i] < target){  //traverses nums and checks if the number at that index is less than the target number
   count ++; //if the number in the array is less than the target, increment count by one
   } 
  }
 return count;  //returns the final count of numbers less than the target
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
