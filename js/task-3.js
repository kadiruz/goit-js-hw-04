const profile = {
	username: "Jacob",
  playTime: 300,
  getInfo(){
    return this.username + " has " + this.playTime + " active hours";
  },
  changeUsername(newName){
    // return this.newName + "has"+ this.playTime +"active hours"
    return this.username = newName;
;  },
  updatePlayTime(newTime){
    // return this.username + "has"+ this.playTime+this.newTime  +"active hours"
    return this.playTime += newTime;
  }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
