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
      // And compare search field text with card content text
      if (cardContents[i].innerText.indexOf(searchField.value) >= 0) {
        // If result more or equals 0 -> show the desired card
        card[i].style.display = 'block';
      } else {
        // Or else -> hide unuseful card
        card[i].style.display = 'none';
      }
    }
  } else {
    // If search button clicked and search field is empty
    // Run through the array of cards and show all card
    for (var i = 0; i < cardsCount; i++) {
      card[i].style.display = 'block';
    }
  }
}
