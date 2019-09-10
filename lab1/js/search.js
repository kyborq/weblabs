// Handling the Enter key
document.querySelector('#search').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    startSearch();
  }
});

// Start search function
function startSearch() {
  // Get search object
  searchField = document.getElementById('search');

  // Get card object
  var card = document.getElementsByClassName('column');
  // Get card content array
  var cardContents = document.getElementsByClassName('content');
  // Get card count
  var cardsCount = cardContents.length;

  // If search field is not empty
  if (searchField.value !== '') {
    // Run through the array of cards
    for (var i = 0; i < cardsCount; i++) {
      var cardText = cardContents[i].innerText.toLowerCase();
      var searchFieldText = searchField.value.toLowerCase();
      // And compare search field text with card content text
      if (cardText.indexOf(searchFieldText) >= 0) {
        // If result more or equals 0 -> show the desired card
        card[i].style.display = 'block';
      } else {
        // Or else -> hide unuseful card
        card[i].style.display = 'none';
      }
    }
    searchField.value = '';
  } else {
    // If search button clicked and search field is empty
    // Run through the array of cards and show all card
    for (var i = 0; i < cardsCount; i++) {
      card[i].style.display = 'block';
    }
  }
}
