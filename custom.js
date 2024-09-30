const base = "https://ddools.imgix.net/cars/base.png?w=600&mark-align=center,middle&mark=https%3A%2F%2Fddools.imgix.net%2Fcars%2Fpaint.png%3Fw%3D600%26bri%3D-18%26con%3D26%26monochrome%3D"
var el = document.getElementsByClassName("color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  let hex = e.target.getAttribute("data-hex");
  let updateColor = base + hex;
  document.getElementById("productImage").src = updateColor; 
}
function update(jscolor) {
  let updateColor = base + jscolor;
     document.getElementById("productImage").src = updateColor;
}