function fizzBuzz(start, end) {
  let size = (end-start)+1;  //sets size equal to end minus start, offset by one
  let count = 0;  //creates a count variable equal to 0
  let fizzArr = new Array (size); //initializes an array of the aforementioned size
  for(let i = start; i <=end;  i++)
  {
   if(i % 3 == 0 && i % 5 == 0){  //traverses the array and checks if an element is a multiple of both 5 and 3
   fizzArr[count] = "FizzBuzz";  //if so, add "FizzBuzz" to the array
   }
   else if(i % 3 ==  0){  //checks if a value is a multiple of 3
   fizzArr[count] = "Fizz" //if so, add "Fizz" to the array
   }
   else if(i % 5 == 0){ //checks if a value is a multiple of 5
   fizzArr[count] = "Buzz";  //if so, add "Buzz" to the array
   }   
  else{
  fizzArr[count] = i;  //if not a multiple of 3 or 5, print out that value
  }
  count ++;  //increment count by one
 }
return fizzArr;  //output the final array
}

// Do not edit this line;
module.exports = fizzBuzz;
