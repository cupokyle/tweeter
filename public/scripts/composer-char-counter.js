$(document).ready(function() {
  
  $('#tweet-text').on("input", function() {
    const maxLength = 140;
    const inputLength = $(this).val().length;
    let $counter = $(this).siblings().children('.counter');
    $counter.html(maxLength - inputLength);
    if ($counter.val() < 0) {
      $counter.css("color", "red");
    } else {
      $counter.css("color", "");
    }
  });

});
