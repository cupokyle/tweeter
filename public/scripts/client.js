// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
$(document).ready(function() {

  renderTweets(data);
  // const $tweet = createTweetElement(tweetData);
  // $("#tweets-container").prepend($tweet); 
});


// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like


  // to add it to the page so we can make sure it's got all the right elements, classes, etc.

const createTweetElement = function(tweetObj) {
  const userName = tweetObj.user.name;
  const userAvatars = tweetObj.user.avatars;
  const userHandle = tweetObj.user.handle;
  const contentText = tweetObj.content.text;
  const createTime = tweetObj.created_at;
  const $html = `<article class="tweet">
  <header>
  <div class="tweet-profile">
      <img src="${userAvatars}" alt="" width="75px" height="75px">
      <h4>${userName}</h4>
      </div>
      <h5>${userHandle}</h5>
  </header>
  <p class="content">${contentText}</p>
  <footer>
  <div class="footer-box">
      <p>${timeago.format(createTime)}</p>
      <div class="icon-box">
      <i class="fas fa-solid fa-flag"></i>
      <i class="fas fa-solid fa-retweet"></i>
      <i class="fas fa-solid fa-heart"></i>
      </div>
      </div>
      </footer>
      </article>`;
      return $html;
};

const renderTweets = function(tweetsArray) {
  tweetsArray.forEach(tweet => {
    console.log(tweet);
    const $thisNewTweet = createTweetElement(tweet);
    $("#tweets-container").append($thisNewTweet);
  });
};

renderTweets(data);