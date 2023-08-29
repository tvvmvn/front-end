var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var brightnessInput = document.getElementById('brightness');
var saturateInput = document.getElementById('saturate');
var invertInput = document.getElementById('invert');
var blurInput = document.getElementById('blur');

var brightnessValue = document.getElementById("brightness-value");
var saturateValue = document.getElementById("saturate-value");
var invertValue = document.getElementById("invert-value");
var blurValue = document.getElementById("blur-value");

var imgElement = new Image();
var filter = {};

document.addEventListener("DOMContentLoaded", function () {
  imgElement.src = "../../../img/homies.jpg";
  render();
})

brightnessInput.addEventListener('input', function (e) {
  applyFilter(e.target.name, e.target.value, '%');
  brightnessValue.textContent = e.target.value;
})

saturateInput.addEventListener('input', function (e) {
  applyFilter(e.target.name, e.target.value, '%');
  saturateValue.textContent = e.target.value;
})

invertInput.addEventListener('input', function (e) {
  applyFilter(e.target.name, e.target.value, '%');
  invertValue.textContent = e.target.value;
})

blurInput.addEventListener('input', function (e) {
  applyFilter(e.target.name, e.target.value, 'px');
  blurValue.textContent = e.target.value;
})

function applyFilter(name, value, unit) {
  filter[name] = value + unit;

  console.log(filter)

  var filter_string = "";

  for (var key in filter) {
    filter_string += `${key}(${filter[key]}) `;
  }

  ctx.filter = filter_string.trim();
  
  render();
}

function render() {
  ctx.drawImage(imgElement, 0, 0);
}