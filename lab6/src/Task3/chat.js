window.onload = function() {
  let sendButton = document.getElementById('message-send');

  sendButton.onclick = function() {
    let chatSection = document.getElementById('chat-container');

    let messageText = document.getElementById('message-text');
    if (messageText != '') {
      let newMessageSection = document.createElement('div');
      newMessageSection.classList.add('chat-section-message', 'chat-section-message--myself');

      let newMessageContainer = document.createElement('div');
      newMessageContainer.classList.add('message-container');

      let author = document.createElement('h3');
      author.innerText = 'Вы';
      author.classList.add('message-container_author');
      let text = document.createElement('p');
      text.classList.add('message-container_text', 'message-container_text--myself');
      text.innerText = messageText.value;

      newMessageContainer.append(author, text);
      newMessageSection.append(newMessageContainer);

      chatSection.append(newMessageSection);

      messageText.value = '';
    }
  };
};
