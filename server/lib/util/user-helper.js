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
    
      Female: ["https://img-premium.flaticon.com/png/512/522/premium/522279.png?token=exp=1628805742~hmac=4088365812ea994311f83c0f86f390e3","https://img-premium.flaticon.com/png/512/522/premium/522275.png?token=exp=1628805720~hmac=1428b9b8ad72f1e37fbcefce8f57f37a","https://img-premium.flaticon.com/png/512/522/premium/522284.png?token=exp=1628805717~hmac=7dcb047a2b57d21715360a37e83e2d24","https://img-premium.flaticon.com/png/512/522/premium/522253.png?token=exp=1628805706~hmac=0ec82238f63ce2ad153411e6699acc07", "https://img-premium.flaticon.com/png/512/522/premium/522257.png?token=exp=1628806247~hmac=d51404b4b21a39cd46d6769b16c6af61", "https://image.flaticon.com/icons/png/512/522/522281.png", "https://img-premium.flaticon.com/png/512/522/premium/522288.png?token=exp=1628805388~hmac=436ff6651dd0b4da7cba6353c0e1f820", "https://img-premium.flaticon.com/png/512/522/premium/522268.png?token=exp=1628805699~hmac=7641f1e9f477168cc4b55167510b146c", "https://image.flaticon.com/icons/png/512/522/522273.png", "https://img-premium.flaticon.com/png/512/522/premium/522298.png?token=exp=1628805685~hmac=f695a1092fec5398abc8d119db40d96a"],
      Male: ["https://img-premium.flaticon.com/png/512/522/premium/522272.png?token=exp=1628805746~hmac=2be71f6be362a38d46ecf7243fd0bb9f","https://img-premium.flaticon.com/png/512/522/premium/522299.png?token=exp=1628805735~hmac=e7e8b8bb8fda11675a315b84d3ae0287","https://img-premium.flaticon.com/png/512/522/premium/522280.png?token=exp=1628805727~hmac=817fa778de69f857695198bd3c7d404d","https://img-premium.flaticon.com/png/512/522/premium/522252.png?token=exp=1628805726~hmac=b914ce64c097b92655bd82daffb510e0", "https://img-premium.flaticon.com/png/512/522/premium/522271.png?token=exp=1628805715~hmac=e40b99b4d1424b6e7ad69d2734b6d09f", "https://image.flaticon.com/icons/png/512/522/522297.png", "https://img-premium.flaticon.com/png/512/522/premium/522282.png?token=exp=1628805702~hmac=e853cf9b142b3f83c8f73edf530e963d", "https://image.flaticon.com/icons/png/512/522/522296.png", "https://img-premium.flaticon.com/png/512/522/premium/522294.png?token=exp=1628805691~hmac=78b4d01af5f15fa42bda67bff3aca9da", "https://img-premium.flaticon.com/png/512/522/premium/522250.png?token=exp=1628805683~hmac=489f6339e8e63443e3680473515897a1"]
    
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