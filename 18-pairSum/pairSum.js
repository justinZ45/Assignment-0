function pairSum(nums, target) {

if(nums.length <= 1){  //throws error if the array length is less than or equal to one
throw 'error';
}
else{
    for(let i = 0; i < nums.length; i++){
     for(let j = 0; j < nums.length; j++){  //uses nested for loop to check first element, and then every subsequent element in the array
     if(nums[i] + nums[j] == target)  //checks if the two elements add up to the target value
     { 
     return true;  //return true if the elements add up to the target
     }
  }
 }
}
return false;  //return false if elements do not add up to the target value
}

// Do not edit this line;
module.exports = pairSum;
