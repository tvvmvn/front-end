let wrapper = document.getElementById('wrapper');
let container = document.getElementById('container');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let dots = document.getElementsByClassName('dot');
let width = 200;
let thisIndex = 0;
let firstIndex = 0;
let lastIndex = 2;
let wasIndex = null;
let startPoint;
let fromStartPoint = 0;

window.addEventListener('DOMContentLoaded', setButtonAndDot);
prevBtn.addEventListener('click', () => {
  turnOver(-1);
  setButtonAndDot();
})
nextBtn.addEventListener('click', () => {
  turnOver(1);
  setButtonAndDot()
})
wrapper.addEventListener('touchstart', saveStartPoint)
wrapper.addEventListener('touchmove', moving)
wrapper.addEventListener('touchend', (e) => {
  // stay
  if (fromStartPoint > -50 || fromStartPoint < 50) {
    turnOver(0);
  }
  // turn over to next photo
  if (thisIndex < lastIndex && fromStartPoint < -50) {
    turnOver(1)
    setButtonAndDot();
  }
  // turn over to prev photo
  if (thisIndex > firstIndex && fromStartPoint > 50) {
    turnOver(-1)
    setButtonAndDot();
  }
  // reset move
  fromStartPoint = 0;
})

function turnOver(data) {
  thisIndex += data;
  container.style.transform = `translateX(-${thisIndex * width}px)`;
}

function setButtonAndDot() {

  if (thisIndex === firstIndex) {
    prevBtn.classList.add('hidden')
  }
  if (wasIndex === firstIndex) {
    prevBtn.classList.remove('hidden')
  }
  if (thisIndex === lastIndex) {
    nextBtn.classList.add('hidden');
  }
  if (wasIndex === lastIndex) {
    nextBtn.classList.remove('hidden');
  }

  if (wasIndex !== null) {
    dots[wasIndex].classList.remove('active');
  }
  dots[thisIndex].classList.add('active');

  wasIndex = thisIndex;
}

function saveStartPoint(e) {
  startPoint = e.touches[0].clientX;
}

function moving(e) {
  let clientX = e.touches[0].clientX;
  fromStartPoint = clientX - startPoint;

  let movingToPrevInFirst = thisIndex === firstIndex && fromStartPoint > 0;
  let movingToNextInLast = thisIndex === lastIndex && fromStartPoint < 0;

  if (movingToPrevInFirst || movingToNextInLast) return;

  let fromLeft = - (thisIndex * width) + fromStartPoint;
  container.style.transform = `translateX(${fromLeft}px)`;
}