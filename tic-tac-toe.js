// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function topleft(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 80)
  circle.setAttribute("cy", 80)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)

}
  function topmiddle(){
    var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 147)
    circle.setAttribute("cy", 80)
    circle.setAttribute("r", 30)
    circle.setAttribute("fill","#33ff77")
    canvas.appendChild(circle)
}
function topright(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 215)
  circle.setAttribute("cy", 80)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
function middleleft(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 80)
  circle.setAttribute("cy", 150)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
function middlecenter(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 147)
  circle.setAttribute("cy", 150)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
function middleright(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 215)
  circle.setAttribute("cy", 150)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
function bottomleft(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 80)
  circle.setAttribute("cy", 220)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
function bottommiddle(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 147)
  circle.setAttribute("cy", 220)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
function bottomright(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 215)
  circle.setAttribute("cy", 220)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill","#33ff77")
  canvas.appendChild(circle)
}
