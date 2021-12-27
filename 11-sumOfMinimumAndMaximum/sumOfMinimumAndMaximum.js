function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];  //create a variable called min that is initialized to the first array element
  let max = nums[0];  //create a variavle called max that is initialized to the first array element 
  let sum = 0;
  for(let i =0; i < nums.length; i++){
  if(min > nums[i]){ //traverse the array and check if there are any elements smaller than the max
  min = nums[i];  //if so, min becomes the element at that index
  }
  if(max < nums[i]){  //traverse the nums array and check if there are any values greater than the max
  max = nums[i]  //if so,m max becomes that ekement.
  }
 }
sum = min + max;  //add the min and max, and set that to the sum variable
return sum; //return the final sum
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
