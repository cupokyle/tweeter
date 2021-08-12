$(document).ready(function() {

  // Character counter that shows how many characters remain
  $('#tweet-text').on("input", function() {
    const maxLength = 140;
    const inputLength = $(this).val().length;
    let $counter = $(this).siblings().children('.counter');
    $counter.html(maxLength - inputLength);
    // Turns red if limit is surpassed
    if ($counter.val() < 0) {
      $counter.css("color", "red");
      // Regains old color if within limit
    } else {
      $counter.css("color", "");
    }
  });

});
