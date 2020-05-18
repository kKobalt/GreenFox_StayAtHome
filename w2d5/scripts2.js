// document.getElementById("fox-3").style.backgroundColor = "yellow";

// let changeStyles = () => {
function changeStyles() {
  document.getElementById('fox-4').style.backgroundColor = "gold";

  var fox = document.getElementsByClassName('fox');
  fox[0].style.color = "red";
  fox[0].textContent = "new Zerda One";
  fox[1].style.backgroundColor = "skyblue";
  fox[1].textContent = "new Zerda Two";

  document.getElementById('fox-6').style.color = "white";
  document.getElementById('fox-6').style.backgroundColor = "red";
  document.getElementById('fox-6').textContent = "Lagopus volume II";
  // document.querySelector('#p').style.backgroundColor = "salmon";
  // var x = document.getElementsByClassName('section2');

  var pElementsAmount = document.getElementsByTagName("p");
  for (let i = 0; i < pElementsAmount.length; i++) {
    pElementsAmount[i].style.borderStyle = "dashed";
    pElementsAmount[i].style.borderLeft = "15px solid black";
  }

  console.log(pElementsAmount.length + " <p> elements found");
  console.log(fox.length + " 'fox' classes found");
}
