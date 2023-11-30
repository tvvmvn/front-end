var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var UNIT = {
  brightness: "%",
  saturate: "%",
  invert: "%",
  blur: "px",
}
var filter = {};


var imgElement = new Image();
imgElement.src = "../../../../img/homies.jpg";
imgElement.addEventListener("load", function () {  
  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;
  
  render();
});


function setFilter(input) {
  
  console.log(input);

  var name = input.name;
  var value = input.value;

  filter[name] = value + UNIT[name];

  // filter object
  console.log(filter);
  
  var filterInString = "";
  
  for (var key in filter) {
    filterInString += `${key}(${filter[key]}) `;
  }

  // filter in string
  console.log(filterInString);
  
  ctx.filter = filterInString.trim();
  
  render();

  input.nextElementSibling.textContent = value;
}


function render() {
  ctx.drawImage(imgElement, 0, 0);
}