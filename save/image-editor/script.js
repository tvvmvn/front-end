var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fileInput = document.getElementById('file-input');

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

/* 
  JS Filter Steps
*/

// 1 Upload file
fileInput.addEventListener('change', function (e) {
  var file = e.target.files[0];
  var src = URL.createObjectURL(file);

  imgElement.src = src;
});

// 2 An image is loaded on canvas.
imgElement.addEventListener('load', function (e) {
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;

  render();
})

// 3 Adjust each filter
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

// 4 Apply filter to image
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

/* 
  Helper functions
*/

// draw image
function render() {
  ctx.drawImage(imgElement, 0, 0);
}