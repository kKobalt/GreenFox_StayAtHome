// JS only

var color = "purple";
var number = 10;
var word = "cool";
var e = getComputedStyle(document.querySelector('.north'));
// querySelector - zjednodušuje výběr elementů, bere vše, co je vnořené
// getComputedStyle - vrací všechny CSS styly
// READ-ONLY!!!
console.log("bgCol: ", e.backgroundColor);
console.log("bg   : ", e.background);
console.log("color: ", e.color);

//  ----- Change the background color of the first box to purple, if the color is purple

var element = document.getElementById("north");
var style = window.getComputedStyle(element, "");
var bgColor = style.getPropertyValue("background-color");

console.log("el: ", element);
console.log("st: ", style.background);
console.log("bg: ", bgColor);


function convertColor(color) {
  var rgbColors = new Object();

  ///////////////////////////////////
  // Handle rgb(redValue, greenValue, blueValue) format
  //////////////////////////////////
  if (color[0] == 'r') {
    // Find the index of the redValue.  Using subscring function to 
    // get rid off "rgb(" and ")" part.  
    // The indexOf function returns the index of the "(" and ")" which we 
    // then use to get inner content.  
    color = color.substring(color.indexOf('(') + 1, color.indexOf(')'));

    // Notice here that we don't know how many digits are in each value,
    // but we know that every value is separated by a comma.
    // So split the three values using comma as the separator.
    // The split function returns an object.
    rgbColors = color.split(',', 3);

    // Convert redValue to integer
    rgbColors[0] = parseInt(rgbColors[0]);
    // Convert greenValue to integer
    rgbColors[1] = parseInt(rgbColors[1]);
    // Convert blueValue to integer
    rgbColors[2] = parseInt(rgbColors[2]);
  }

  ////////////////////////////////
  // Handle the #RRGGBB' format
  ////////////////////////////////
  else if (color.substring(0, 1) == "#") {
    // This is simples because we know that every values is two 
    // hexadecimal digits.
    rgbColors[0] = color.substring(1, 3);  // redValue
    rgbColors[1] = color.substring(3, 5);  // greenValue
    rgbColors[2] = color.substring(5, 7);  // blueValue

    // We need to convert the value into integers, 
    //   but the value is in hex (base 16)!
    // Fortunately, the parseInt function takes a second parameter 
    // signifying the base we're converting from.  
    rgbColors[0] = parseInt(rgbColors[0], 16);
    rgbColors[1] = parseInt(rgbColors[1], 16);
    rgbColors[2] = parseInt(rgbColors[2], 16);
  }
  return rgbColors;
}

console.log("bgConverted: ", convertColor("#ff0000"));


// var northId = document.getElementById('north');
// console.log(northId);
// console.log(northId.textContent);
// console.log(northId.className);
// console.log(northId.background);
// var north = document.getElementsByClassName('north')[0];
// console.log(north.textContent);
// console.log(north.background);
// var north2 = Array.prototype.slice.call(document.querySelectorAll('.north'));
// console.log(north2[0].backgroundColor);
// console.log(north2.backgroundColor);
// // if (e.backgroundColor !== "#e67676") { north.backgroundColor = 'blue' }
// if (e.backgroundColor !== "rgb(230, 118, 118)") { north.backgroundColor = 'blue' }
// else { north.backgroundColor = 'grey' };
// console.log("north.bgCol: " + north.backgroundColor);

//  ----- Change the text of the second
//  - if the number is bigger than 100 to "whoah, that's a big number". 
//  - otherwise "just a regular number, please".

var eastTxt = document.getElementsByClassName('east')[0];
if (number > 100) { eastTxt.textContent = "whoah, that's a big number"; }
else { eastTxt.textContent = "just a regular number, please"; }

//  ----- Change the text to 'Power of DOM' of the third if the word is cool, 
//  - otherwise change the fourth one

var southTxt = document.getElementsByClassName('south')[0];
var westTxt = document.getElementsByClassName('west')[0];
if (word === "cool") {
  southTxt.textContent = 'Power of DOM';
} else {
  westTxt.textContent = 'Power of DOM';
}
