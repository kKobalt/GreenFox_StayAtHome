// The Third part

let name = 'Adam';

console.log(name + "'s apples");
console.log('Hello world!');

$('h1').text('We are having a 10 minute break until 18:05');
$('p').html('StayAtHome Coding Camp, Likes:<strong>13</strong>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

let color = 'blue';

$('h2').toggleClass(color);
$('h2').toggleClass(color);

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>');

$('#special-list-item').remove();

let addButtonHandler = () => {
  if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + '</li>');
  }
};

function addButtonHandler2() {
  if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + '</li>');
  }
};

$('#add-button').click(addButtonHandler);

$('#remove-button').click(() => {
  $('li:last-child').remove();
});

// This is the fourth part

let age = 12;

console.log('Starting the if');
console.log('This Is a Sentence'.toLowerCase());

if (age < 18) {
  console.log('Not old enough to drink');
} else {
  console.log('Old enough to drink');
}

console.log('This is after the if');

let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);

colors.push('purple');

colors.forEach((color) => {
  $('#box-container').append('<div class="box"></div>');
  $('.box:last-child').css('background', color);
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}


// This a JavaScript comment

/*
  This is a multiline
  JavaScript comment.
*/

// This is the first part:

// 12+3
// 15
// 12-5;
// 7
// 12*4
// 48
// 12/3
// 4
// 12/4*8-15
// 9
// let age
// undefined
// age = 33
// 33
// age / 3
// 11
// age = 12
// 12
// age / 3
// 4
// let legs = 4
// undefined
// legs * 2
// 8
// legs = 2;
// 2
// legs = 2
// 2
// let anotherAge = age
// undefined
// anotherAge
// 12
// let name = Adam
// let name = 'Adam'
// undefined
// name
// "Adam"
// name = "Peti"
// "Peti"
// "Adam's apples"
// "Adam's apples"
// name
// "Peti"
// let name = 'something'
// undefined
// true
// true
// false
// false
// let oldEnoughToDrive = false
// undefined
// oldEnoughToDrive = true
// true
// name + 'else'
// "somethingelse"
// name + 'else' + 14 + name + age
// "somethingelse14something12"
// 'adam' - 'apple'
// NaN
// true && true
// true
// false || true
// true
// true && (false || (true && false))
// false
// oldEnoughToDrive
// true
// !oldEnoughToDrive
// false
// let color1 = 'orange'
// undefined
// let color2 = 'blue'
// undefined
// let colors = ['orange', 'blue', 'green', 'purple']
// undefined
// colors
// (4) ["orange", "blue", "green", "purple"]
// colors[3]
// "purple"
// colors[2]
// "green"
// colors.length
// 4
// colors.push('yellow')
// 5
// colors
// (5) ["orange", "blue", "green", "purple", "yellow"]
// "we have a 10 minute break until 16:08"
// "we have a 10 minute break until 16:08"
// [12, 54, 1212]
// (3) [12, 54, 1212]
// [true, false, true]
// (3) [true, false, true]
// [colors, colors, colors]
// (3) [Array(5), Array(5), Array(5)]
// colors
// (5) ["orange", "blue", "green", "purple", "yellow"]
// colors[2] = 'lime'
// "lime"
// colors
// (5) ["orange", "blue", "lime", "purple", "yellow"]
// [33, 'Adam', true]
// (3) [33, "Adam", true]
// let person = {
//   name: 'Adam',
//   age: 33,
//   oldEnoughToDrive: true
// }
// undefined
// person
// {name: "Adam", age: 33, oldEnoughToDrive: true}
// person.name
// "Adam"
// person.age
// 33
// person.age + 10
// 43
// person.name = 'Peti'
// "Peti"
// person
// {name: "Peti", age: 33, oldEnoughToDrive: true}
// name
// "something"
// age
// 12
// oldEnoughToDrive
// true
// person.favoriteColors = ['lime', 'green']
// (2) ["lime", "green"]
// person
// {name: "Peti", age: 33, oldEnoughToDrive: true, favoriteColors: Array(2)}age: 33favoriteColors: (2) ["lime", "green"]0: "lime"1: "green"length: 2__proto__: Array(0)name: "Peti"oldEnoughToDrive: true__proto__: Object
