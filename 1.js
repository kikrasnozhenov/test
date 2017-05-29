function send_text() {
  var txt = document.getElementById('text').value;
  var result = document.getElementById('result');
  document.getElementById('result').innerHTML = txt;
}

document.getElementById('send').addEventListener('click', send_text);

var form = document.querySelector('form');

form.addEventListener("click", function(event){
    event.target.style.background = "#fff";
});

const square = function(a){
  return a * a;
}
console.log(square(10));

const sumOfSquares = function(a, b){
  return square(a) + square(b);
}
console.log(sumOfSquares(10, -9));

const squareSumOfSquares = function(a, b){
  return square(sumOfSquares(a, b));
}
console.log(squareSumOfSquares(1, 1));

var getTriangleArea = function(h, b){
  return 1 / 2 * h * b;
}
console.log(getTriangleArea(5, 10));