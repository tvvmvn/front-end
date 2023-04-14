/*
  
  JS Image Editor Tutorials

  1 presentation about how it works.
  
  2 declare all the variables and functions.
  
  3 upload file

  4 draw image on canvas with initializing each filter

  5 adjust each filter

  6 apply filter

*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fileInput = document.getElementById('file-input');
var brightnessInput = document.getElementById('brightness');
var saturationInput = document.getElementById('saturation');
var inversionInput = document.getElementById('inversion');
var blurInput = document.getElementById('blur');
var image = new Image();
var filter = {};

// upload file
fileInput.addEventListener('change', (e) => {
  var file = e.target.files[0];
  var src = URL.createObjectURL(file);

  image.src = src;  
});

// draw image on canvas.
image.addEventListener('load', (e) => {
  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);

  // initialize each filter
  brightnessInput.value = 100;
  saturationInput.value = 100;
  inversionInput.value = 0;
  blurInput.value = 0;
})

// adjust each filter
brightnessInput.addEventListener('change', (e) => {
  filter.brightness = e.target.value + '%';
  applyFilter()
})

saturationInput.addEventListener('change', (e) => {
  filter.saturate = e.target.value + '%';
  applyFilter()
})

inversionInput.addEventListener('change', (e) => {
  filter.invert = e.target.value + '%';
  applyFilter();
})

blurInput.addEventListener('change', (e) => {
  filter.blur = e.target.value + 'px';
  applyFilter()
})

// apply filter to image
function applyFilter() {

  console.log(filter);

  var effect_map = [];

  for (key in filter) {
    effect_map.push(`${key}(${filter[key]})`);
  }

  ctx.filter = effect_map.join(" ");
  ctx.drawImage(image, 0, 0);
}
