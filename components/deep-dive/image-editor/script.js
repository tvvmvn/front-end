var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fileInput = document.getElementById('file-input');
var brightnessInput = document.getElementById('brightness');
var saturateInput = document.getElementById('saturate');
var invertInput = document.getElementById('invert');
var blurInput = document.getElementById('blur');
var imgElement = new Image();
var filter = {};

/* 
  JS Filter Steps
*/

// 1 Upload file
fileInput.addEventListener('change', (e) => {
  var file = e.target.files[0];
  var src = URL.createObjectURL(file);

  imgElement.src = src;
});

// 2 An image is loaded on canvas.
imgElement.addEventListener('load', (e) => {
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;

  initializeFilter();

  render();
})

// 3 Adjust each filter
brightnessInput.addEventListener('change', function (e) {
  applyFilter(e.target.name, e.target.value, '%');
})

saturateInput.addEventListener('change', function (e) {
  applyFilter(e.target.name, e.target.value, '%');
})

invertInput.addEventListener('change', function (e) {
  applyFilter(e.target.name, e.target.value, '%');
})

blurInput.addEventListener('change', function (e) {
  applyFilter(e.target.name, e.target.value, 'px');
})

// 4 Apply filter to image
function applyFilter(name, value, unit) {
  filter[name] = value + unit;

  console.log(filter)

  var filter_string = "";

  for (var key in filter) {
    filter_string += ` ${key}(${filter[key]})`;
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

// initialize filters
function initializeFilter() {
  brightnessInput.value = 100;
  saturateInput.value = 100;
  invertInput.value = 0;
  blurInput.value = 0;

  filter = {};
}