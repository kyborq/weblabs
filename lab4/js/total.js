window.onload = function() {
  // let rows = document.querySelectorAll('.dir-row');
  //
  // let leftSide = document.querySelectorAll('.left-side')[0].children[0].children;
  // let rightSide = document.querySelectorAll('.right-side')[0].children[0].children;
  //
  // let currentRow = 2;
  //
  // cursorMove();
  //
  // document.addEventListener('keydown', function(event) {
  //   // console.log(event.keyCode);
  //   if (event.keyCode === 38) {
  //     currentRow -= 1;
  //     // console.log(currentRow);
  //   }
  //
  //   if (event.keyCode == 40) {
  //     currentRow += 1;
  //     // console.log(currentRow);
  //   }
  //
  //   cursorMove();
  // });
  //
  // function cursorMove() {
  //   for (var i = 0; i < leftSide.length; i++) {
  //     if (i == currentRow) {
  //       rows[i].classList.add('selected');
  //     } else {
  //       rows[i].classList.remove('selected');
  //     }
  //   }
  // }

  let leftSide = document.querySelectorAll('.left-side')[0].children[0].children;

  let currentIndex = 0;
  let count = leftSide.length;

  // arrow button events
  document.addEventListener('keydown', function(event) {
    // left button pressed
    if (event.keyCode === 37) {
      currentIndex = 0;
      console.log("Left tab active");
    }

    // right button pressed
    if (event.keyCode === 39) {
      currentIndex = 0;
      console.log("Right tab active");
    }

    // up button pressed
    if (event.keyCode === 38) {
      if (currentIndex < count) {
        currentIndex += 1;
        console.log("(" + currentIndex + "/" + count + ")");
      }
    }

    // down button pressed
    if (event.keyCode === 40) {
      if (currentIndex > 0) {
        currentIndex -= 1;
        console.log("(" + currentIndex + "/" + count + ")");
      }
    }
  });
}
