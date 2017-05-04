function send_text() {
  var txt = document.getElementById('text').value;
  var result = document.getElementById('result');
  document.getElementById('result').innerHTML = txt;
}

document.getElementById('send').addEventListener('click', send_text);

document.getElementById("change-color").addEventListener("click", function(){
    this.style.backgroundColor = "#525252";
});
