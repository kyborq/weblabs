window.onload = function() {
  let rows = document.querySelectorAll('.dir-row');
  let currentRow = 2;

  for (var i = 0; i < rows.length; i++) {
    rows[i].onclick = function(event) {
      currentRow = event.target.parentElement.children[0].innerText;
      console.log(currentRow, event.target.parentElement);

      if (i == currentRow) {
        rows[i].classList.toggle('selected');
      }
    }
  }

  // for (var i = 0; i < rows.length; i++) {
  //   if (i == currentRow) {
  //     rows[i].classList.toggle('selected');
  //   }
  // }
}
