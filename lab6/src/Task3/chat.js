function ChatUI() {
  this.addMessage = function(messageText, messageSenderID) {
    // TODO:
    var chat = document.getElementById('chat-container');
    var text = messageText;

    if (text != '') {
      var newMessage = document.createElement('div');
      var newMessageContainer = document.createElement('div');
      var newMessageAuthor = document.createElement('h3');
      var newMessageText = document.createElement('p');

      newMessage.classList.add('chat-section-message');
      newMessageContainer.classList.add('message-container');
      newMessageAuthor.classList.add('message-container_author');
      newMessageText.classList.add('message-container_text');
      newMessageText.innerText = text;

      if (messageSenderID === '1') {
        newMessageAuthor.innerText = 'Вы';
        newMessageText.classList.add('message-container_text--myself');
        newMessage.classList.add('chat-section-message--myself');
      } else {
        newMessageAuthor.innerText = 'Собеседник';
        newMessageText.classList.remove('message-container_text--myself');
        newMessage.classList.remove('chat-section-message--myself');
      }

      newMessageContainer.append(newMessageAuthor, newMessageText);
      newMessage.append(newMessageContainer);
      chat.append(newMessage);
    }
  };
}

window.onload = function() {
  chat = new ChatUI();

  var sendButton = document.getElementById('message-send');
  var text = document.getElementById('message-text').value;
  sendButton.onclick = function() {
    chat.addMessage(text, '1');
  };
};
