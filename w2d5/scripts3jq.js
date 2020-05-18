// jQuery

var color = "purple";
var number = 10;
var word = "cool";

//  ----- Change the background color of the first box to purple, if the color is purple

// if VAR color
if (color === "purple") {
  $('.north').css('background-color', 'purple');
}
else {
  $('.north').css('background-color', 'grey');
};

// if CSS color
// if ($('.north').css('background-color', '#e67676')) {
//   $('.north').css('background-color', color);
// }

//  ----- Change the text of the second
//  - if the number is bigger than 100 to "whoah, that's a big number". 
//  - otherwise "just a regular number, please".

if (number > 100) {
  $('.east').text("whoah, that's a big number");
} else {
  $('.east').text("just a regular number, please");
}

//  ----- Change the text to 'Power of DOM' of the third if the word is cool, 
//  - otherwise change the fourth one

if (word === "cool") {
  $('.south').html('Power of DOM');
} else {
  $('.west').html('Power of DOM');
}
