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
      $("#tweet-form").slideDown("fast");
        window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       })
       if (!$('#tweet-form').is(":visible")){
       $("#tweet-form").slideToggle("fast");
       }   
  }); 
  // Animates little arrow icon
  setInterval(() => {
    $(".arrow").animate({})
  }, 1500);
});
