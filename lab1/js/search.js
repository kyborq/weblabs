function startSearch() {
  searchField = document.getElementById("search");

  card = document.getElementsByClassName("column")
  cardContents = document.getElementsByClassName("content")
  cardsCount = cardContents.length;

  sampleText = "Lorem";

  if (searchField.value != "") {
    for (var i = 0; i < cardsCount; i++) {
      if (cardContents[i].innerText == searchField.value) {
        card[i].style.display = "block";
      } else {
        card[i].style.display = "none";
      }
    }
  } else {
    for (var i = 0; i < cardsCount; i++) {
      card[i].style.display = "block";
    }
  }
}
