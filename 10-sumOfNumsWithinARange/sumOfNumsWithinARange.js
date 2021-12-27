function sumOfNumsWithinARange(nums, start, end) {
let count = 0;  //creates a variable called count and sets it equal to 0
 for(let i = 0; i < nums.length; i++){
 if(nums[i] >= start && nums[i] <= end){  //traverses the nums array and checks if the element in the array is between the start and end value
 count ++;  //if between the start and end value, increment count
 }
}
return count;  //return the final count, which is the number of values in the desired range\
 
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
