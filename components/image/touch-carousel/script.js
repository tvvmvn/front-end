// container and images
var frame = document.getElementById('frame');
var container = document.getElementById('container');
var images = document.getElementsByClassName("image");
var width = 200;
// buttons
var prev = document.getElementById('prev');
var next = document.getElementById('next');
// indicator
var dots = document.getElementsByClassName('dot');
// index
var firstIndex = 0;
var lastIndex = images.length - 1;
var previousIndex = 0;
var index = 0;
// touch stuff
var x1;
var x2;
var limit = 50;
var left = 0


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

  var drawNotEnough = Math.abs(x2 - x1) < limit;
  var drawEnoughToNext = x2 - x1 < -limit;
  var drawEnoughToPrev = x2 - x1 > limit;
  
  if (drawNotEnough) {
    turnOver(0) // stay
  }

  if (index > firstIndex && drawEnoughToPrev) {
    turnOver(-1) // prev
  } 

  if (index < lastIndex && drawEnoughToNext) {
    turnOver(1) // next
  } 
}

function turnOver(data) {
  index += data;
  
  left = -(index * width);

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
