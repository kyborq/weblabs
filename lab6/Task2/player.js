function Song() {
  // название, длительность
}

function PlayerList() {
  // хранит список песен
}

function Player(playerList) {
  this.currentTrack = "song.mp3";
  this.status = "stop";
  this.playerList = playerList;

  this.display = function() {
    return "Track: " + this.currentTrack + " Status: " + this.status;
  };

  this.play = function() {
    this.status = "play";
  };

  this.stop = function() {
    this.status = "play";
  };

  this.pause = function() {
    this.status = "pause";
  };

  this.next = function() {
    // TODO
  };

  this.prev = function() {
    // TODO
  };
}
