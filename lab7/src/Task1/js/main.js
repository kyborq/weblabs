window.onload = function() {
  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function deleteFromStoreElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  function deleteAll() {
    listingElements = [];
    storeElements = [];
  }

  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addButton = document.querySelector('#add-button');
  var deleteButton = document.querySelector('#delete-button');
  var removeAllButton = document.querySelector('#remove-all-button');

  // Добавление
  addButton.onclick = function() {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  // Удаление
  deleteButton.onclick = function() {
    var selectedOption = document.querySelector('.store-select option:checked');
    deleteFromStoreElements(selectedOption.innerText);
    updateUI();
  };

  // Удаление всего
  removeAllButton.onclick = function() {
    deleteAll();
    updateUI();
  };
};
