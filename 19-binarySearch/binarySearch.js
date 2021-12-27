class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
  let mid = Math.floor(nums.length/2); //set middle value, equal to the length of nums, divided by 2
  let newArr = nums.slice(0);  //create a copy of nums to use within the code
  if(newArr[mid] == target){  //if middle value equals target, it has been found
  return true;  //so, return true
  }
  if(newArr[mid] < target){  //if middle value less than target, recursively call function and check upper half of array
  return this.binarySearch(newArr.splice(mid, newArr.length-1), target);  
  }
  if(newArr[mid] > target){  //if middle value is larger than target, recursively call function and check lower half of array
  return this.binarySearch(newArr.splice(0, mid), target); 
  }
  else{
  return false;  //if target not found, return false
  }
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
