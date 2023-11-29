// container and images
var frame = document.getElementById('frame');
var container = document.getElementById('container');
var images = document.getElementsByClassName("image");
var imageWidth = 200;
// buttons
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
// indicator
var dots = document.getElementsByClassName('dot');
// index and left
var index = 0;
var firstIndex = 0;
var lastIndex = images.length - 1;
var left = 0;
// touch stuff
var x1, x2 = 0;
var turnOverPoint = 50;


// Touch Event
prevBtn.addEventListener("click", function () {
  clickHandler(-1)
});
nextBtn.addEventListener("click", function () {
  clickHandler(1)
});
frame.addEventListener('touchstart', touchStartHandler)
frame.addEventListener('touchmove', touchMoveHandler)
frame.addEventListener('touchend', touchEndHandler)


function touchStartHandler(e) {
  console.log("touch start");

  // save start point
  x1 = e.touches[0].clientX;
}

function touchMoveHandler(e) {
  console.log('touch move');

  // touching point
  x2 = e.touches[0].clientX;

  // prevent moving in first and last photo.
  var movingToRight = x2 - x1 > 0;
  var movingToLeft = x2 - x1 < 0;

  if (index == firstIndex && movingToRight) return;
  if (index == lastIndex && movingToLeft) return;

  // moving with finger
  container.style.transform = `translateX(${left + (x2 - x1)}px)`;
}

function touchEndHandler() {
  console.log('touch end');

  // no touchmove 
  if (x2 == 0) return;

  // check x2 and x1
  console.log(x2, x1);

  // check drawing value
  var drawEnoughToNext = -(x2 - x1) > turnOverPoint;
  var drawEnoughToPrev = x2 - x1 > turnOverPoint;
  
  // get to prev
  if (index > firstIndex && drawEnoughToPrev) { 
    clickHandler(-1);
    // get to next
  } else if (index < lastIndex && drawEnoughToNext) { 
    clickHandler(1);
    // get back to present photo.
  } else {
    clickHandler(0);
  }
    
  // initialize x1, x2
  x1, x2 = 0;
}

function clickHandler(data) {
  index += data;
  left = -(index * imageWidth);

  console.log("index:", index);
  console.log("left:", left);

  // image
  setImage();
  // buttons
  togglePrevBtn();
  toggleNextBtn();
  // indicator
  setIndicator();
}

function setImage() {
  container.style.transform = `translateX(${left}px)`;
}

function togglePrevBtn() {
  if (index == firstIndex) {
    prevBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
  }
}

function toggleNextBtn() {
  if (index == lastIndex) {
    nextBtn.classList.add('hidden');
  } else {
    nextBtn.classList.remove('hidden');
  }
}

function setIndicator() {
  for (var i=0; i<dots.length; i++) {
    if (i === index) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
}