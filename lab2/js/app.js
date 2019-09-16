var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  var btn = document.querySelector('#btn');
  var textarea = document.querySelector('#textarea');

  document.querySelector('#btn').addEventListener('click', (e) => {
    addTask();
    textarea.value = '';
  });

  function addTask() {
    var taskContent = textarea.value;
    var containerToDo = document.querySelector('#container-to-do');
    // var newTask = document.querySelector('div');
    var newTask = document.createElement('div');
    newTask.classList.add('new');
    newTask.classList.add('checkbox');
    containerToDo.appendChild(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    label.appendChild(check);
    label.classList.add("not-labeled");
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.appendChild(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon');
    icon.classList.add('glyphicon-trash');
    icon.classList.add('icon');
    newTask.appendChild(icon);

    textarea.value = '';

    check.click(function () {
      labeledTask();
    });

    function labeledTask() {
      label.classList.replace("not-labeled", "labeled");
    }
  }
});
