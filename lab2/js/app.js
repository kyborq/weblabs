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
    var task_list = document.querySelectorAll('.new');

    for (let task of task_list) {
      // console.log(task.innerText);
      if (completeAll.checked) {
        task.classList.add('completed');
      } else {
        task.classList.remove('completed');
      }

      let task_label = task.children[0];
      let task_check = task_label.children[0];

      if (task.classList.contains('completed')) {
        task_label.classList.add('completed');
        task_check.checked = true;
      } else {
        task_label.classList.remove('completed');
        task_check.checked = false;
      }

      task_check.onclick = function(e) {
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
    var task_list = document.querySelectorAll('.new');

    for (let task of task_list) {
      task.style.display = 'block';
    }
  };

  var filterShowCompleted = document.getElementById('filter-show-completed');
  filterShowCompleted.onclick = function() {
    var task_list = document.querySelectorAll('.new');

    for (let task of task_list) {
      if (task.classList.contains('completed')) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  };

  var filterShowRemoved = document.getElementById('filter-show-removed');
  filterShowRemoved.onclick = function() {
    var task_list = document.querySelectorAll('.new');

    for (let task of task_list) {
      if (task.classList.contains('deleted')) {
        task.classList.remove('deleted');
        // task.style.display = 'block';
      } else {
        task.classList.add('deleted');
        // task.style.display = 'none';
      }
    }
  };
}
