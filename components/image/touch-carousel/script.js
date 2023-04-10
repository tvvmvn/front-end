var wrapper = document.getElementById('wrapper');
var container = document.getElementById('container');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var dots = document.getElementsByClassName('dot');
var width = 200;

var firstIndex = 0;
var lastIndex = 2;
var previousIndex = 0;
var thisIndex = 0;

var startPoint;
var fromStartPoint = 0;

// Touch Event
wrapper.addEventListener('touchstart', saveStartPoint)
wrapper.addEventListener('touchmove', moving)
wrapper.addEventListener('touchend', handleEnd)

function saveStartPoint(e) {
  startPoint = e.touches[0].clientX;
}

function moving(e) {
  var clientX = e.touches[0].clientX;
  fromStartPoint = clientX - startPoint;

  var movingToPrevInFirst = thisIndex === firstIndex && fromStartPoint > 0;
  var movingToNextInLast = thisIndex === lastIndex && fromStartPoint < 0;

  if (movingToPrevInFirst || movingToNextInLast) return;

  var fromLeft = - (thisIndex * width) + fromStartPoint;
  container.style.transform = `translateX(${fromLeft}px)`;
}

function handleEnd() {
  // stay
  if (fromStartPoint > -50 || fromStartPoint < 50) {
    turnOver(0);
  }
  // turn over to next photo
  if (thisIndex < lastIndex && fromStartPoint < -50) {
    turnOver(1)
  }
  // turn over to prev photo
  if (thisIndex > firstIndex && fromStartPoint > 50) {
    turnOver(-1)
  }
  // reset move
  fromStartPoint = 0;
}

function turnOver(data) {
  console.log('previous index:', previousIndex);
  
  thisIndex += data;

  console.log('this index:', thisIndex);

  // images
  container.style.transform = `translateX(-${thisIndex * width}px)`;

  // button
  if (thisIndex === 0) {
    prev.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
  }

  if (thisIndex === 2) {
    next.classList.add('hidden');
  } else {
    next.classList.remove('hidden');
  }

  // indicator
  dots[previousIndex].classList.remove('active');
  dots[thisIndex].classList.add('active');

  previousIndex = thisIndex;
}
