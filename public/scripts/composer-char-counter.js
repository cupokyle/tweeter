$(document).ready(function(){
  
  $('#tweet-text').on("input", function() {
    const maxLength = 140;
    const inputLength = $(this).val().length;
    console.log(inputLength)
  });

});
