let age = 2020 - 1977;
let ww2 = 1945 - 1939;
let teslaSharePrice = 725.15;
let teslaShareAmount = 76;
let tesla = teslaShareAmount * teslaSharePrice;
let secondsOfDay = 24 * 60 * 60;
let hungarians = (9660351 / 7780473000) * 100;
let chinaSize = 9597000;
let czechSize = 78865;
let bigger = chinaSize / czechSize;
let participants = 654 % 7;
let names = ['Ava', 'Fia', 'Ruby', 'Kala'];
let myObject = { colors: ["red", "green", "blue", "black", "yellow"] }

console.log(`${teslaShareAmount} shares of Tesla equals ${tesla} at April 27th, 2020`); // ${string template literal}: backtick (grave accent) ALT 096 nebo ALTGr 7 
console.log(`Day has ${secondsOfDay} seconds`);
console.log(`${hungarians.toLocaleString('cs-CZ', { minimumFractionDigits: 5 })} % world population are Hungarians (toLocaleString cs)`);
console.log(`${new Number(hungarians).toLocaleString('cs-CZ', { minimumFractionDigits: 6 })} % world population are Hungarians (new Number())`);
console.log(`China is ${bigger.toFixed(3)} × bigger than Czech Republic (toFixed)`);
console.log(`China is ${bigger.toLocaleString('cs-CZ', { minimumFractionDigits: 10 })} × bigger than Czech Republic (toLocaleString cs)`);
console.log(`China is ${bigger.toLocaleString('en-US', { minimumFractionDigits: 2 })} × bigger than Czech Republic (toLocaleString en)`);
console.log(`China is ${new Number(bigger).toLocaleString('cs-CZ', { minimumFractionDigits: 2 })} × bigger than Czech Republic (new Number())`);
console.log(`${parseInt("1234567", 10).toLocaleString('cs-CZ', { minimumFractionDigits: 2 })} thousands separators (parseInt)`);
console.log(`654 people in 7 people's groups: smallest group has ${participants}`);
console.log(`'${names[2]}' length is longer then 5 characters: ${names[2].length > 5}`);
names.push('Eida');
console.log('names.length: ' + names.length);
names[0] = 'Luba';
console.log('names[0]: ' + names[0]);
console.log(`'names.length' (${names.length}) length has more items then 4: ${names.length > 4}`);
myObject.hasManyColors = myObject.colors.length > 3 ? true : false;
console.log(`'myObject.colors.length' (${myObject.colors.length}) has more items then 3: ${myObject.hasManyColors}`);

let max = 10;
for (let i = 0; i < max; i++) {
  console.log(`${i} \t ${i + 1 < 10 ? '0' + (i + 1) : i + 1} \t ${(i + 1) * 2}`);
}

let printNumbersTill = (n) => { for (let i = 1; i <= n; i++) { console.log(`${i}`); } }
printNumbersTill(5);

let getGreetingTo = (name) => {
  return 'Hello ' + name;
}
console.log(getGreetingTo('Tony'));

let logGreetingTo = (name) => {
  console.log('HELLO ' + name);
}
logGreetingTo('MARK');

let printValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printValues([0, 3, 6, 7, 9]);

let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach(prvek => {
  console.log(prvek);
});

let printValuesFE = (ar) => {
  ar.forEach(element => {
    console.log(element);
  });
}
printValuesFE([3, 4, 5, 6, 7, 8]);