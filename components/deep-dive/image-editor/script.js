var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fileInput = document.getElementById('file-input');
var brightnessInput = document.getElementById('brightness');
var saturationInput = document.getElementById('saturation');
var inversionInput = document.getElementById('inversion');
var blurInput = document.getElementById('blur');
var imgElement = new Image();
var filter = {};

// upload file
fileInput.addEventListener('change', (e) => {
  var file = e.target.files[0];
  var src = URL.createObjectURL(file);

  imgElement.src = src;
});

// image is loaded on canvas.
imgElement.addEventListener('load', (e) => {
  initialize();
  drawImage();
})

// adjust each filter
brightnessInput.addEventListener('change', (e) => {
  applyFilter('brightness', e.target.value, '%');
})

saturationInput.addEventListener('change', (e) => {
  applyFilter('saturate', e.target.value, '%');
})

inversionInput.addEventListener('change', (e) => {
  applyFilter('invert', e.target.value, '%');
})

blurInput.addEventListener('change', (e) => {
  applyFilter('blur', e.target.value, 'px');
})

// apply filter to image
function applyFilter(name, value, unit) {
  filter[name] = value + unit;

  var filter_list = [];

  for (key in filter) {
    filter_list.push(`${key}(${filter[key]})`);
  }

  ctx.filter = filter_list.join(" ");
  
  drawImage();
}

// draw image
function drawImage() {
  ctx.drawImage(imgElement, 0, 0);
}

// initialize filters
function initialize() {
  brightnessInput.value = 100;
  saturationInput.value = 100;
  inversionInput.value = 0;
  blurInput.value = 0;

  filter = {};
}