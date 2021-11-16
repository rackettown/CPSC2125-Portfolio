window.onload = function() {
  footer();
}
function footer(){
  var x = document.lastModified;
  document.getElementById("date").innerHTML = x;
}

function yellowButton() {
   document.getElementById("article").style.backgroundColor = "LightGoldenRodYellow";
}

function pinkButton() {
  document.getElementById("article").style.backgroundColor = "lightpink";
}

function redButton() {
  document.getElementById("article").style.backgroundColor = "lightcoral";
}