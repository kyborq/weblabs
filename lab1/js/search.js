// handling the Enter key
document.querySelector('#search').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    startSearch();
  }
});

// start search function
function startSearch() {
  searchField = document.getElementById('search').value; // search text

  // cards
  var cardContent = document.getElementsByClassName('content'); // card content array
  var cardsCount = cardContent.length; // get card count

  for (var i = 0; i < cardsCount; i++) {
    var cardText = cardContent[i].innerText.toLowerCase();
    var searchField = searchField.toLowerCase();

    // search
    if (searchField !== '') {
      if (cardText.indexOf(searchField) >= 0) {
        document.getElementsByClassName('column')[i].style.display = 'block'; // card object
      } else {
        document.getElementsByClassName('column')[i].style.display = 'none'; // card object
      }
    } else {
      document.getElementsByClassName('column')[i].style.display = 'block'; // card object
    }
  }
}

// TODO:
// - make highlithghtghting for search result
