/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case 'Square':
      var singleLine=""
      for(var i=1;i<=height;++i){
        singleLine += character
      }
      for(var i=1;i<=height;++i){
        console.log(singleLine)
      }
      break;
    
    case 'Triangle':
      var singleLine=""
      for(var i=1;i<=height;++i){
        singleLine += character
        console.log(singleLine)
      }
      break;

    case 'Diamond':
      numberIncrement=(height-1)/2
      for(var i=0;i<=numberIncrement; i++ ){
        printDiamondLine(2-i, 1+2*i, character)
      }
      for(var i=1;i<3; i++){
        printDiamondLine(i, -2*i+5, character)
      }
      break;

    default:
      console.log("Input not recognized! Please input a valid shape \n (Triangle, Diamond, or Square), and remember to capitalize the first letter")
      break;
  }
}
function printDiamondLine(numberSpaces, numberCharacters, character){
  var singleLine=""
  for(var i=0;i<numberSpaces; i++){
    singleLine += " "
  }
  for(var i=0;i<numberCharacters; i++){
    singleLine += character
  }
  for(var i=0;i<numberSpaces; i++){
    singleLine += " "
  }
  console.log(singleLine)
}
printShape("Square", 5, "&")
printShape("Triangle", 4, "?")
printShape("cofefe", 5, '2')
printShape("Diamond", 5, "A")