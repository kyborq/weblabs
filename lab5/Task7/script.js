var soldier1 = {
  name: 'Soldier1',
  health: 100,
  currentCoordinates: {
    x: 0,
    y: 0
  },
  shotCoordinates: {
    x: 0,
    y: 0
  },
  spawn: function() {
    this.currentCoordinates.x = Math.floor(Math.random() * 100);
    this.currentCoordinates.y = Math.floor(Math.random() * 100);
    console.log(this.name + ' spawned at [' + this.currentCoordinates.x + '; ' + this.currentCoordinates.y + ']');
  },
  shot: function() {
    this.shotCoordinates.x = Math.floor(Math.random() * 100);
    this.shotCoordinates.y = Math.floor(Math.random() * 100);
    console.log(this.name + ' shotted [' + this.shotCoordinates.x + '; ' + this.shotCoordinates.y + ']');
  }
};

var soldier2 = {
  name: 'Soldier2',
  health: 100,
  currentCoordinates: {
    x: -1,
    y: -1
  },
  shotCoordinates: {
    x: -2,
    y: -2
  },
  spawn: function() {
    this.currentCoordinates.x = Math.floor(Math.random() * 100);
    this.currentCoordinates.y = Math.floor(Math.random() * 100);
    console.log(this.name + ' spawned at [' + this.currentCoordinates.x + '; ' + this.currentCoordinates.y + ']');
  },
  shot: function() {
    this.shotCoordinates.x = Math.floor(Math.random() * 100);
    this.shotCoordinates.y = Math.floor(Math.random() * 100);
    console.log(this.name + ' shotted [' + this.shotCoordinates.x + '; ' + this.shotCoordinates.y + ']');
  }
};

soldier1.spawn();
soldier2.spawn();
setInterval(function() {
  if (soldier1.health > 0 && soldier2.health > 0) {
    if (soldier1.shotCoordinates.x === soldier2.currentCoordinates.x && soldier1.shotCoordinates.y === soldier2.currentCoordinates.y) {
      soldier2.health -= 25;
      console.log(soldier2.name + ': ' + soldier2.health);
    }
    soldier1.shot();

    if (soldier2.shotCoordinates.x === soldier1.currentCoordinates.x && soldier2.shotCoordinates.y === soldier1.currentCoordinates.y) {
      soldier1.health -= 25;
      console.log(soldier1.name + ': ' + soldier1.health);
    }
    soldier2.shot();

    if (soldier1.health <= 0) {
      console.log(soldier1.name + ' is winner!');
    } else if (soldier2.health <= 0) {
      console.log(soldier2.name + ' is winner!');
    }
  }
}, 1);
