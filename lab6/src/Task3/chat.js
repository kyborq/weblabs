function ChatUI() {
  this.addMessage = function(messageText, messageSenderType) {
    var chat = document.getElementById('chat-container');
    var text = messageText;

    if (text !== '') {
      var newMessage = document.createElement('div');
      var newMessageContainer = document.createElement('div');
      var newMessageAuthor = document.createElement('h3');
      var newMessageText = document.createElement('p');

      newMessage.classList.add('chat-section-message');
      newMessageContainer.classList.add('message');
      newMessageAuthor.classList.add('message_author');
      newMessageText.classList.add('message_text');
      newMessageText.innerText = text;

      if (messageSenderType === 'client') {
        newMessageAuthor.innerText = 'Вы';
        newMessageText.classList.add('message_text--myself');
        newMessage.classList.add('chat-section-message--myself');
      } else {
        newMessageAuthor.innerText = 'Собеседник';
        newMessageText.classList.remove('message_text--myself');
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
  sendButton.onclick = function() {
    var text = document.getElementById('message-text').value;

    chat.addMessage(text, 'client');

    document.getElementById('message-text').value = '';
  };
};
