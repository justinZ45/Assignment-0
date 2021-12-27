function setUnionOfAnyAmountOfSets(...args) {
  let finalSet = new Set;  //create a new set that will contain all other sets
  for(let i = 0; i < args.length; i++){
  for(const num of args[i]){   //nested loop traverses each set, and then each element in the set
    finalSet.add(num); //add element to the new set
}
}
return finalSet;  //return the final, joined set
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
