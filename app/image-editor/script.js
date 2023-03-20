let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let brightnessInput = document.getElementById('brightness');
let saturationInput = document.getElementById('saturation');
let inversionInput = document.getElementById('inversion');
let blurInput = document.getElementById('blur');

let fileInput = document.getElementById('file-input');
let image = null;
let filter = {};

fileInput.addEventListener('change', createURL);

function createURL(e) {
  
  let file = e.target.files[0];
  let src = URL.createObjectURL(file);

  drawImage(src);
}

function drawImage(src) {
  image  = new Image();
  image.setAttribute('src', src);
  
  image.addEventListener('load', (e) => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
  })
}

function applyFilter() {
  
  let value = Object.keys(filter).map(name => {
    return `${name}(${filter[name]})`;
  })

  console.log(filter);

  ctx.filter = value.join(' ');
  ctx.drawImage(image, 0, 0);
}

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