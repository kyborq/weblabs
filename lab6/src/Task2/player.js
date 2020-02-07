function Song(songName, songLength) {
  this.songName = songName; // Название
  this.songLength = songLength; // Длительность
}

function PlayerList(song) {
  this.songs = [song]; // Хранит список песен
}

function Player(playerList) {
  this.currentTrackId = 0;
  this.currentTrack = playerList.songs[0][this.currentTrackId].songName;
  this.status = "stop";
  this.playerList = playerList;

  this.display = function() {
    return "Track: " + this.currentTrack + " Status: " + this.status;
  };

  this.play = function() {
    this.status = "play";
  };

  this.stop = function() {
    this.status = "stop";
  };

  this.pause = function() {
    this.status = "pause";
  };

  this.next = function() {
    this.currentTrackId += 1;

    if (this.currentTrackId > playerList["songs"][0].length - 1) {
      this.currentTrackId = 0;
    }

    // console.log(this.currentTrackId + "/" + (playerList["songs"][0].length - 1));
    this.currentTrack = playerList.songs[0][this.currentTrackId].songName;
  };

  this.prev = function() {
    this.currentTrackId -= 1;

    if (this.currentTrackId < 0) {
      this.currentTrackId = playerList["songs"][0].length - 1;
    }

    // console.log(this.currentTrackId + "/" + (playerList["songs"][0].length - 1));
    this.currentTrack = playerList.songs[0][this.currentTrackId].songName;
  };
}

var playerList = new PlayerList([new Song("Edvard Grieg - Peer Gynt Suite", 102), new Song("Ludwig van Beethoven - Symphony No. 5", 130), new Song("Samuel Barber - Adagio for Strings", 130)]);
var player = new Player(playerList);

document.getElementById("nextbtn").onclick = function() {
  player.next();
  document.getElementById("playerui").innerText = player.display();
};

document.getElementById("prevbtn").onclick = function() {
  player.prev();
  document.getElementById("playerui").innerText = player.display();
};

document.getElementById("playerui").innerText = player.display();
