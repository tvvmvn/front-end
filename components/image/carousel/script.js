// container and images
var frame = document.getElementById('frame');
var container = document.getElementById('container');
var images = document.getElementsByClassName("image");
var imageWidth = 200
// buttons
var prev = document.getElementById('prev');
var next = document.getElementById('next');
// indicator
var dots = document.getElementsByClassName('dot');
// index and left
var index = 0;
var firstIndex = 0;
var lastIndex = images.length - 1;
var previousIndex = 0;
var left = 0
// touch stuff
var x1, x2 = 0;
var turnOverPoint = 50;


function turnOver(data) {
  index += data;
  
  left = -(index * imageWidth);

  // images
  container.style.transform = `translateX(${left}px)`;

  // button
  if (index === firstIndex) {
    prev.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
  }

  if (index === lastIndex) {
    next.classList.add('hidden');
  } else {
    next.classList.remove('hidden');
  }

  // indicator
  dots[previousIndex].classList.remove('active');
  dots[index].classList.add('active');

  previousIndex = index;
}

// Touch Event
frame.addEventListener('touchstart', touchStartHandler)
frame.addEventListener('touchmove', touchMoveHandler)
frame.addEventListener('touchend', touchEndHandler)

function touchStartHandler(e) {
  console.log("touch start");

  // save start point
  x1 = e.touches[0].clientX;
}

function touchMoveHandler(e) {
  console.log('touch move')

  // touching point
  x2 = e.touches[0].clientX;

  var movingToRight = x2 - x1 > 0;
  var movingToLeft = x2 - x1 < 0;

  if (index === firstIndex && movingToRight) return;
  if (index === lastIndex && movingToLeft) return;

  container.style.transform = `translateX(${left + (x2 - x1)}px)`;
}

function touchEndHandler() {
  console.log('touch end');

  // check x2 and x1
  console.log(x2, x1)

  // no touchmove 
  if (!x2) return;

  var drawEnoughToNext = -(x2 - x1) > turnOverPoint;
  var drawEnoughToPrev = x2 - x1 > turnOverPoint;
  
  if (index > firstIndex && drawEnoughToPrev) { // prev
    turnOver(-1)
  } 
  
  if (index < lastIndex && drawEnoughToNext) { // next
    turnOver(1) 
  } 
    
  container.style.transform = `translateX(${left}px)`;

  // initialize touching point (in case of no touchmove)
  x2 = 0;
}