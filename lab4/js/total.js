window.onload = function() {
  let rows = document.querySelectorAll('.dir-row');

  for (let row of rows) {
    row.onclick = function (event) {
      // console.log(row.innerText);
      console.log(event.target.parentElement.rowIndex);
      if (event.target.parentElement.rowIndex === row.rowIndex) {
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    };
  }
}
