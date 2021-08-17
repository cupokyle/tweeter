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
    
      Female: ["https://img-premium.flaticon.com/png/512/4439/premium/4439926.png?token=exp=1629231525~hmac=62108d632b2abab37acd4bde5dcba466", "https://img-premium.flaticon.com/png/512/4439/premium/4439959.png?token=exp=1629233356~hmac=c3c6a068a036a3b6bd55c1c538a9f33b", "https://img-premium.flaticon.com/png/512/4440/premium/4440960.png?token=exp=1629233597~hmac=c0933c4cc6e58af1a4ccdbf7b80678c1", "https://img-premium.flaticon.com/png/512/4439/premium/4439994.png?token=exp=1629231595~hmac=1685271d9d76aad0e3e31a3ad2a93a90", "https://img-premium.flaticon.com/png/512/4440/premium/4440004.png?token=exp=1629231611~hmac=733a17454b59f15ad69dfcc9f4217081", "https://img-premium.flaticon.com/png/512/4440/premium/4440876.png?token=exp=1629231640~hmac=104da02f163418a3b505d5cb771ab933", "https://img-premium.flaticon.com/png/512/4439/premium/4439989.png?token=exp=1629233474~hmac=d923daaa5926f7414759a0c093038dc6", "https://img-premium.flaticon.com/png/512/4440/premium/4440884.png?token=exp=1629231679~hmac=9f7452ed8c2e3803ba0cdb3807cfc515", "https://img-premium.flaticon.com/png/512/4440/premium/4440894.png?token=exp=1629231701~hmac=ac6b077021788147ec21a9c000e908b0", "https://img-premium.flaticon.com/png/512/4440/premium/4440898.png?token=exp=1629231715~hmac=af7c8fb5c7d4a7442a06a32b6f2e246a", "https://img-premium.flaticon.com/png/512/4440/premium/4440944.png?token=exp=1629231755~hmac=776370513eb2e05b5187d40ac426fb12", "https://img-premium.flaticon.com/png/512/4440/premium/4440879.png?token=exp=1629233499~hmac=2d788fc6cdbbd8b33a45769dda148268"],
      Male: ["https://img-premium.flaticon.com/png/512/4439/premium/4439947.png?token=exp=1629232634~hmac=d1ade82177ba178c52647a0df628358f", "https://img-premium.flaticon.com/png/512/4439/premium/4439952.png?token=exp=1629232645~hmac=8355aa39ecdf02c5d6f875647ec047c0", "https://img-premium.flaticon.com/png/512/4439/premium/4439968.png?token=exp=1629232657~hmac=8ddf4f962c00f398d26500e82d81a14f", "https://img-premium.flaticon.com/png/512/4439/premium/4439980.png?token=exp=1629232677~hmac=6b4fb6821b411ad72654777ac30b3d76", "https://img-premium.flaticon.com/png/512/4439/premium/4439984.png?token=exp=1629232685~hmac=4a5d0761d2b72fb40ac294b3af596873", "https://img-premium.flaticon.com/png/512/4440/premium/4440871.png?token=exp=1629232716~hmac=10121898f2d3c6bb97353d4251fdbec7", "https://img-premium.flaticon.com/png/512/4440/premium/4440872.png?token=exp=1629232725~hmac=6c6a61e573f70b2664da775c70fc5733", "https://img-premium.flaticon.com/png/512/4440/premium/4440873.png?token=exp=1629232734~hmac=3e95e59fe32fc74399fd44bad4905a71", "https://img-premium.flaticon.com/png/512/4440/premium/4440874.png?token=exp=1629232743~hmac=b8450f752adaf2fc35ccbf4b01a324aa", "https://img-premium.flaticon.com/png/512/4440/premium/4440877.png?token=exp=1629232758~hmac=c2aa48ec8c0d994f4e2af3d34430c61b", "https://img-premium.flaticon.com/png/512/4440/premium/4440880.png?token=exp=1629232782~hmac=5cab8a81d5b3fc5cb83d5c9673bd9395", "https://img-premium.flaticon.com/png/512/4440/premium/4440881.png?token=exp=1629232793~hmac=a53654014bbda468a002b87e974bcb46", "https://img-premium.flaticon.com/png/512/4440/premium/4440882.png?token=exp=1629232802~hmac=efdad8b3bcd0cdaff0cb65585994e33f", "https://img-premium.flaticon.com/png/512/4440/premium/4440886.png?token=exp=1629232817~hmac=9f3efd5ebc6974c96b8a5d52960da186", "https://img-premium.flaticon.com/png/512/4440/premium/4440902.png?token=exp=1629232850~hmac=f909ad8a19a64cea5e6fc484108e9c9a", "https://img-premium.flaticon.com/png/512/4440/premium/4440914.png?token=exp=1629232873~hmac=093b1ddcff654783f33d87ab594d3b54", "https://img-premium.flaticon.com/png/512/4440/premium/4440917.png?token=exp=1629232891~hmac=c95fd7516ab9388bcd4c5da39511fb23", "https://img-premium.flaticon.com/png/512/4440/premium/4440923.png?token=exp=1629229951~hmac=5b1a156115fc076e3924a43bbba0e514", "https://img-premium.flaticon.com/png/512/4440/premium/4440933.png?token=exp=1629232916~hmac=3d564911e638ee376825e7ba3ff46e89", "https://img-premium.flaticon.com/png/512/4440/premium/4440953.png?token=exp=1629232942~hmac=a018feb7e62e79ddac1217d22e9eedea"]
    
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