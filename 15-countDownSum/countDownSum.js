class MySolution {
  countDownSum(num) {

   if (num <=1){  //base case, recursion stops when num <= 1
   return num; //return the final num (sum)
   }
   else{
  return  num + this.countDownSum(num-1);  //recursive code to decrement num and call function again
  }
 }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
