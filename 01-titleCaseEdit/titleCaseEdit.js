function titleCaseEdit(title) {
  const arr = title.split(" ");   //splits title into an array of strings when space is encountered

for (let i = 0; i < arr.length; i ++)
{
arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);   //traverses array and capitalizes first letter of each word
}

const newTitle = arr.join(" ");   //creates a new string with new title, separated by spaces
return newTitle; //returns the final title
}
// Do not edit this line;
module.exports = titleCaseEdit;
