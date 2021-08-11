/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
  // Event Listener to listen for tweet submissions
  $(document).on("submit", function(event){
    event.preventDefault();
    if ($("#tweet-text").val() === "" || $("#tweet-text").val() === null){
      alert("Tweets should never be blank!")
    } else if ($("#tweet-text").val().length > 140) {
      alert("You've entered too many characters!")
    } else {
    const $formData = $("#tweet-text").serialize();
    $("#tweet-text").val('');
    $.post({
      url: "tweets",
      data: $formData
    })
      .done(function() {
        console.log("Successful Tweet!")
        // This is me trying to make tweets update in real time
        loadTweets();
      });
    }
  })
  // GET request to grab tweets
  const loadTweets = function() {
    $.get({
      url: "/tweets",
      dataType: "json",
      data: "data",
      success: function(data){
        renderTweets(data);
    }
    });
  }
  // Call loadTweets which in turn grabs tweets and calls renderTweets on them.
  loadTweets();
});

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
  <p class="content">${escape(contentText)}</p>
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

//Empties tweet container and then renders all tweets

const renderTweets = function(tweetsArray) {
  $("#tweets-container").empty();
  tweetsArray.forEach(tweet => {
    const $thisNewTweet = createTweetElement(tweet);
    $("#tweets-container").prepend($thisNewTweet);
  });
};

// Escape function for Cross-Site Scripting

const escape = function (str) {
  let div = document.createElement("p");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};