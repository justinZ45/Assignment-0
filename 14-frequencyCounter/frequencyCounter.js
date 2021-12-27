function frequencyCounter(word) {
  let wordFreq ={};  //initialize a new object to hold key pair values
  for(let i =0; i < word.length; i++)
  {
  let letter = word.charAt(i);  //variable letter is equal to a character at the index in the word
  if(wordFreq[letter]){
  wordFreq[letter]++;  //if letter exists, increment by one
  }
  else{
  wordFreq[letter] =1;  //if new letter is found, set equal to one
  }
}
return wordFreq; //returns final wordFreq object
}

// Do not edit this line;
module.exports = frequencyCounter;
