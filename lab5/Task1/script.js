var catVasiliy = {
  name: "Василий",
  birthday: new Date(),
  listOfFears: ["Vacuum cleaner", "beep"],
  meow: function() {
    console.log("Meow :3");
  },
  reaction: function(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      this.meow();
      console.log("Run from here!!!");
    }
  }
};
