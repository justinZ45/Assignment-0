function isPalindrome(word) {
  const strLen = word.length;  //creates a const variable equal to the length of the word
  for(let i = 0; i < strLen/2; i++){
  {
   if(word[i] != word[strLen-1-i])  //traverses the first half of word and checks if first and second string are equal
   {
   return false;  //output false (not a palindrome)
   }  
}
return true;  //return true (is a palindrome)
}

// Do not edit this line;
module.exports = isPalindrome;
