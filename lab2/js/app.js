window.onload = function() {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  // add task handler
  btn.onclick = function() {
    // add element to UI
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('task-checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    label.classList.add('task-label');
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    txtArea.value = '';

    // register events here:

    // complete task
    check.onclick = function() {
      label.classList.toggle('completed');
    };

    // delete task event
    icon.onclick = function(event) {
      event.currentTarget.parentElement.remove();
    };
  };

  // TODO: complete all handler here
  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function() {
    var task = document.getElementsByClassName('new');
    var taskCheckbox = document.getElementsByClassName('task-checkbox');
    var taskLabel = document.getElementsByClassName('task-label');
    for (var i = 0; i < task.length; i++) {
      if (taskCheckbox[i].checked) {
        if (!completeAll.checked) {
          taskCheckbox[i].checked = false;
          taskLabel[i].classList.toggle('completed');
        }
      } else {
        if (completeAll.checked) {
          taskCheckbox[i].checked = true;
          taskLabel[i].classList.toggle('completed');
        }
      }
    }
  };



  // TODO: filter tasks
  /*
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      console.log('show all');
    };

    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      console.log('show completed');
    };

    var filterShowCompleted = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      console.log('show removed');
    };
  */
}
