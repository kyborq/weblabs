function Song(songName, songDuration) {
  this.songName = songName; // Название
  this.songDuration = songDuration; // Длительность songDuration
}

function PlayerList(songsArray) {
  this.currentTrackId = 0;
  this.songs = songsArray || []; // Хранит список песен

  this.next = function() {
    if (this.songs.length > 0) {
      this.currentTrackId += 1;
      if (this.currentTrackId > this.songs.length - 1) {
        this.currentTrackId = 0;
      }
    }
  };

  this.prev = function() {
    if (this.songs.length > 0) {
      this.currentTrackId -= 1;
      if (this.currentTrackId < 0) {
        this.currentTrackId = this.songs.length - 1;
      }
    }
  };

  this.getCurrentTrackName = function() {
    if (this.songs === 'object') {
      return this.songs[this.currentTrackId].songName;
    } else {
      return 'Empty List!';
    }
  };
}

function Player(playerList) {
  this.status = 'stop';
  this.playerList = new PlayerList(playerList);

  this.display = function() {
    return 'Track: ' + this.playerList.getCurrentTrackName() + ' Status: ' + this.status;
  };

  this.play = function() {
    if (this.playerList.songs.length > 0) {
      this.status = 'play';
    }
  };

  this.stop = function() {
    if (this.playerList.songs.length > 0) {
      this.status = 'stop';
    }
  };

  this.pause = function() {
    if (this.playerList.songs.length > 0) {
      this.status = 'pause';
    }
  };

  this.next = function() {
    this.playerList.next();
  };

  this.prev = function() {
    this.playerList.prev();
  };
}

// var player = new Player([new Song('Edvard Grieg - Peer Gynt Suite', 102), new Song('Ludwig van Beethoven - Symphony No. 5', 130), new Song('Samuel Barber - Adagio for Strings', 130)]);
var player = new Player();

document.getElementById('nextbtn').onclick = function() {
  player.next();
  document.getElementById('playerui').innerText = player.display();
};

document.getElementById('prevbtn').onclick = function() {
  player.prev();
  document.getElementById('playerui').innerText = player.display();
};

document.getElementById('playerui').innerText = player.display();
