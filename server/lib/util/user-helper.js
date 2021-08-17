"use strict";

const Chance      = require("chance"),
  chance      = new Chance();

const md5 = require('md5');


module.exports = {
  generateRandomUser: () => {
    const gender    = chance.gender();
    const firstName = chance.first({gender: gender});
    const lastName  = chance.last();
    const userName  = firstName + " " + lastName;
    
    let userHandle = "@";
    if (Math.random() > 0.5) {
      let prefix    = chance.prefix({gender: gender});
      prefix = prefix.replace(".", "");
      userHandle += prefix;
    }

    userHandle += lastName;

    if (Math.random() > 0.5) {
      const suffix = Math.round(Math.random() * 100);
      userHandle += suffix;
    }
   
    const avatars = {
    
      Female: ["public/images/female/002-angel.png",
      "public/images/female/014-chinese.png",
      "public/images/female/015-clerk.png",
      "public/images/female/017-cooker.png",
      "public/images/female/024-girl.png",
      "public/images/female/027-grandmother.png",
      "public/images/female/031-indian.png",
      "public/images/female/035-mrs claus.png",
      "public/images/female/036-muslim.png",
      "public/images/female/046-woman.png",
      "public/images/female/049-young woman.png"],
      Male: ["public/images/male/001-afro.png",
        "public/images/male/003-arab.png",
        "public/images/male/004-arabian.png",
        "public/images/male/005-architect.png",
        "public/images/male/007-boy.png",
        "public/images/male/008-buddhist.png",
        "public/images/male/009-business woman.png",
        "public/images/male/010-businessman.png",
        "public/images/male/011-captain.png",
        "public/images/male/012-chef.png",
        "public/images/male/013-children.png",
        "public/images/male/016-clown.png",
        "public/images/male/019-cowboy.png",
        "public/images/male/020-construction worker.png",
        "public/images/male/021-doctor.png",
        "public/images/male/022-elf.png",
        "public/images/male/025-gnome.png",
        "public/images/male/026-grandfather.png",
        "public/images/male/028-hacker.png",
        "public/images/male/029-Hippie.png",
        "public/images/male/030-hipster.png",
        "public/images/male/032-mafia.png",
        "public/images/male/033-man.png",
        "public/images/male/034-mexican.png",
        "public/images/male/037-nutcracker.png",
        "public/images/male/038-pantomime.png",
        "public/images/male/040-pirate.png",
        "public/images/male/041-programmer.png",
        "public/images/male/042-punk.png",
        "public/images/male/043-soldier.png",
        "public/images/male/044-thief.png",
        "public/images/male/045-viking.png",
        "public/images/male/047-wrestler.png",
        "public/images/male/048-young man.png",
        "public/images/male/050-zombie.png"]
    
    };
    
    const avatarArray = avatars[gender];
    const userAvatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
  

    return {
      name: userName,
      handle: userHandle,
      avatars: userAvatar
    };
  }
};