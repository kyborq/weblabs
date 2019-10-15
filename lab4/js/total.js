window.onload = function() {
  let sideDir = document.querySelectorAll('.left-side')[0].children[0].children;

  let currentIndex = 0;
  let count = sideDir.length;

  cursorMove();

  // arrow button events
  document.addEventListener('keydown', function(event) {
    // left button pressed
    if (event.keyCode === 37) {
      clearSelection();
      currentIndex = 0;
      sideDir = document.querySelectorAll('.left-side')[0].children[0].children;
      count = sideDir.length;
      cursorMove();
      // console.log("Left tab active");
    }

    // right button pressed
    if (event.keyCode === 39) {
      clearSelection();
      currentIndex = 0;
      sideDir = document.querySelectorAll('.right-side')[0].children[0].children;
      count = sideDir.length;
      cursorMove();
      // console.log("Right tab active");
    }

    // up button pressed
    if (event.keyCode === 38) {
      if (currentIndex > 0) {
        currentIndex -= 1;
        cursorMove();
        // console.log("(" + currentIndex + "/" + count + ")");
      }
    }

    // down button pressed
    if (event.keyCode === 40) {
      if (currentIndex < count - 1) {
        currentIndex += 1;
        cursorMove();
        // console.log("(" + currentIndex + "/" + count + ")");
      }
    }
  });

  function cursorMove() {
    for (var i = 0; i < sideDir.length; i++) {
      if (i == currentIndex) {
        sideDir[i].classList.add('selected');
      } else {
        sideDir[i].classList.remove('selected');
      }
    }
  }

  function clearSelection() {
    for (var i = 0; i < sideDir.length; i++) {
      sideDir[i].classList.remove('selected');
    }
  }
}
