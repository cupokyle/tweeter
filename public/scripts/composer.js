$(document).ready(function() {

  // Hide ToTop button when scrolled down
  $('#toTop').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $('#toTop:hidden').stop(true, true).fadeIn();
      // here is where im trying to implement the fading out of the nav bar as you scroll
      $('nav').fadeOut("slow");
    } else {
      $('nav').fadeIn();
      $('#toTop').stop(true, true).fadeOut();
    }
  });
  // ToTop functionality
  $('#toTop').on("click", function() {
    // When clicked, scrolls to top of page
    $("#tweet-form").slideDown("fast");
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // If tweetform is not visible, toggle it so that it is.
    if (!$('#tweet-form').is(":visible")) {
      $("#tweet-form").slideToggle("fast");
    }
  });
  // Animates little arrow icon on "Compose button"
  setInterval(() => {
    $(".arrow").animate({});
  }, 1500);
});

// This helper function automatically grows textarea as user types:

$(function() {
  $('#tweet-text').on('input keyup paste', function() {
    let $el = $(this),
      offset = $el.innerHeight() - $el.height();

    if ($el.innerHeight() < this.scrollHeight) {
      // Grow the field if scroll height is smaller
      $el.height(this.scrollHeight - offset);
    } else {
      // Shrink the field and then re-set it to the scroll height in case it needs to shrink
      $el.height(1);
      $el.height(this.scrollHeight - offset);
    }
  });
});
