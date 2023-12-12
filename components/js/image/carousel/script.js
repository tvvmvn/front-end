// container and photos
var frame = document.getElementById('frame');
var container = document.getElementById('container');
var photos = document.getElementsByClassName("photo");
var imageWidth = 200;
// buttons
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
// indicator
var dots = document.getElementsByClassName('dot');
// index and left
var index = 0;
var firstIndex = 0;
var lastIndex = photos.length - 1;
var left = 0;
// touch stuff
var x1, x2 = 0;
var turnOverPoint = 50;


// click
prevBtn.addEventListener("click", function () {
  move(-1);
});
nextBtn.addEventListener("click", function () {
  move(1);
});

// touch
frame.addEventListener('touchstart', touchStartHandler)
frame.addEventListener('touchmove', touchMoveHandler)
frame.addEventListener('touchend', touchEndHandler)


function touchStartHandler(e) {
  // save start point
  x1 = e.touches[0].clientX;

  console.log(`touch start, x1: ${x1}`);
}

function touchMoveHandler(e) {
  // touching point
  x2 = e.touches[0].clientX;

  console.log(`touch move, x2: ${x2}`);

  // prevent moving in first and last photo.
  var movingToRight = x2 - x1 > 0;
  var movingToLeft = x2 - x1 < 0;

  if (index == firstIndex && movingToRight) return;
  if (index == lastIndex && movingToLeft) return;

  // moving with finger
  container.style.transform = `translateX(${left + (x2 - x1)}px)`;
}

function touchEndHandler() {
  // no touchmove 
  if (x2 == 0) return;

  // check x2 and x1
  console.log(`touch end, x2 - x1: ${x2 - x1}`);

  // check draw value
  var drawEnoughToNext = -(x2 - x1) > turnOverPoint;
  var drawEnoughToPrev = x2 - x1 > turnOverPoint;
  
  // get to previous photo
  if (index > firstIndex && drawEnoughToPrev) { 
    move(-1);
    // get to next photo
  } else if (index < lastIndex && drawEnoughToNext) { 
    move(1);
    // get back to original photo.
  } else {
    move(0);
  }
    
  // initialize x1, x2
  x1, x2 = 0;
}

function move(data) {
  index += data;
  left = -(index * imageWidth);

  console.log(`move, index: ${index}, left: ${left}`);

  // photos
  container.style.transform = `translateX(${left}px)`;

  // buttons
  if (index == firstIndex) {
    prevBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
  }

  if (index == lastIndex) {
    nextBtn.classList.add('hidden');
  } else {
    nextBtn.classList.remove('hidden');
  }

  // indicator
  for (var i=0; i<dots.length; i++) {
    if (i === index) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
}
