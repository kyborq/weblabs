var totalCommander = {
  currentIndex : 0,
  sideDir : document.querySelectorAll('.left-side')[0].children[0].children,
  count : 0,

  init() {
    this.count = this.sideDir.length;
    this.cursorMove();

    console.log('Initialized');
    // arrow button events
    document.addEventListener('keydown', function(event) {
      // left button pressed
      if (event.keyCode === 37) {
        clearSelection();
        this.currentIndex = 0;
        this.sideDir = document.querySelectorAll('.left-side')[0].children[0].children;
        this.count = this.sideDir.length;
        this.cursorMove();
        console.log("Left tab active");
      }

      // right button pressed
      if (event.keyCode === 39) {
        clearSelection();
        this.currentIndex = 0;
        this.sideDir = document.querySelectorAll('.right-side')[0].children[0].children;
        this.count = this.sideDir.length;
        this.cursorMove();
        console.log("Right tab active");
      }

      // up button pressed
      if (event.keyCode === 38) {
        if (this.currentIndex > 0) {
          this.currentIndex -= 1;
          this.cursorMove();
          console.log("(" + currentIndex + "/" + count + ")");
        }
      }

      // down button pressed
      if (event.keyCode === 40) {
        if (this.currentIndex < this.count - 1) {
          this.currentIndex += 1;
          this.cursorMove();
          console.log("(" + currentIndex + "/" + count + ")");
        }
      }
    });
  },

  cursorMove() {
    for (var i = 0; i < this.sideDir.length; i++) {
      if (i == this.currentIndex) {
        this.sideDir[i].classList.add('selected');
      } else {
        this.sideDir[i].classList.remove('selected');
      }
    }
  },

  clearSelection() {
    for (var i = 0; i < this.sideDir.length; i++) {
      this.sideDir[i].classList.remove('selected');
    }
  }
};

window.onload = function() {
  totalCommander.init();
}
