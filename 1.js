function send_text() {
  var txt = document.getElementById('text').value;
  var result = document.getElementById('result');
  document.getElementById('result').innerHTML = txt;
}

document.getElementById('send').addEventListener('click', send_text);

var first = document.getElementById('first');
first.addEventListener("click", function(){
    this.style.background = "#525252";
});

var second = document.getElementById('second');
second.addEventListener("click", function(){
    this.style.background = "#fff";
});
