// Start search function
function startSearch() {
  // Get search object
  searchField = document.getElementById("search");

  // Get card object
  card = document.getElementsByClassName("column")
  // Get card content array
  cardContents = document.getElementsByClassName("content")
  // Get card count
  cardsCount = cardContents.length;

  // If search field is not empty
  if (searchField.value != "") {
    // Run through the array of cards
    for (var i = 0; i < cardsCount; i++) {
      // And compare search field text with card content text
      if (cardContents[i].innerText == searchField.value) {
        // If success -> show the desired card
        card[i].style.display = "block";
      } else {
        // If fail -> hide unuseful card
        card[i].style.display = "none";
      }
    }
  } else {
    // If search button clicked and search field is empty
    // Run through the array of cards and show all card
    for (var i = 0; i < cardsCount; i++) {
      card[i].style.display = "block";
    }
  }
}
