window.onload = function() {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  // add task handler
  btn.onclick = function() {
    // add new task
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    txtArea.value = '';

    // complete task
    check.onclick = function() {
      label.classList.toggle('completed');
      label.parentElement.classList.toggle('completed');
    };

    // delete task event
    icon.onclick = function(event) {
      // event.currentTarget.parentElement.remove();
      // event.currentTarget.parentElement.style.display = 'none';
      event.currentTarget.parentElement.classList.add('deleted');
    };
  };

  // complete all
  var completeAll = document.getElementById('complete-all');
  completeAll.onclick = function() {
    var taskList = document.querySelectorAll('.new');

    for (let task of taskList) {
      // console.log(task.innerText);
      if (!task.classList.contains('deleted')) {
        if (completeAll.checked) {
          task.classList.add('completed');
        } else {
          task.classList.remove('completed');
        }
      }

      let taskLabel = task.children[0];
      let taskCheck = taskLabel.children[0];

      if (task.classList.contains('completed')) {
        taskLabel.classList.add('completed');
        taskCheck.checked = true;
      } else {
        taskLabel.classList.remove('completed');
        taskCheck.checked = false;
      }

      taskCheck.onclick = function(e) {
        completeAll.checked = false;

        if (e.target.parentElement.classList.contains('completed')) {
          e.target.parentElement.classList.remove('completed');
          e.target.parentElement.parentElement.classList.remove('completed');
        } else {
          e.target.parentElement.classList.add('completed');
          e.target.parentElement.parentElement.classList.add('completed');
        }
      };
    }
  };



  // TODO: filter tasks
  var filterShowAll = document.getElementById('filter-show-all');
  filterShowAll.onclick = function() {
    var taskList = document.querySelectorAll('.new');

    for (let task of taskList) {
      if (task.classList.contains('deleted')) {
        task.style.display = 'none';
      }

      task.style.display = '';
    }
  }
};

var filterShowCompleted = document.getElementById('filter-show-completed');
filterShowCompleted.onclick = function() {
  var taskList = document.querySelectorAll('.new');

  for (let task of taskList) {

    if (task.classList.contains('completed')) {
      if (!task.classList.contains('deleted')) {
        task.style.display = 'block';
      }
    } else {
      task.style.display = 'none';
    }
  }
};

var filterShowRemoved = document.getElementById('filter-show-removed');
filterShowRemoved.onclick = function() {
  var taskList = document.querySelectorAll('.new');

  for (let task of taskList) {
    if (task.classList.contains('deleted')) {
      task.style.display = 'block';
      task.classList.remove('completed');
    } else {
      task.style.display = 'none';
    }
  }
};
