function productOfAnyAmountOfNumbers(...args) {
  let product = 1; //create a variable called product, and initalize it to 1
  for(let i =0; i < args.length; i ++){
  product = product * args[i];  //traverses length of arguments, and multiply each one by each other
  }
return product;  //return the final product
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
