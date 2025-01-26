const profile = {
	username: "Jacob",
  playTime: 300,
  getInfo(){
   console.log(this.username + " has " + this.playTime + " active hours") ;
  },
  changeUsername(newName){
   
    this.username = newName ;
    console.log(this.username + " has " + this.playTime + " active hours") ;
;  },
  updatePlayTime(newTime){
    
    this.playTime += newTime
    console.log(this.username + " has " + this.playTime + " active hours") ; ;
  }
};

profile.getInfo(); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
// profile.getInfo(); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
// profile.getInfo(); // "Marco has 320 active hours!"
