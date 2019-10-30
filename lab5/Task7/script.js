var soldier1 = {
  name: 'Soldier1',
  health: 100,
  currentCoordinates: {
    x: 10,
    y: 20
  },
  spawn: function() {
    this.currentCoordinates.x = Math.floor(Math.random() * 100);
    this.currentCoordinates.y = Math.floor(Math.random() * 100);
  },
  shot: function(x, y) {
    console.log(x, y);
  }
};

soldier1.spawn();
setInterval(function() {
  // todo: spawn 2 soldiers
  var shotX = Math.floor(Math.random() * 100);
  var shotY = Math.floor(Math.random() * 100);
  soldier1.shot(shotX, shotY);
}, 1000);
