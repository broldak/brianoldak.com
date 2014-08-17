$(document).ready(function(){
  $('.nav-item a').on('click', function(){
    if ($(this).data('section')) {
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('section')).offset().top
      }, 800);

      $(window).bind("mousewheel", function() {
        $("html, body").stop();
      });
    }
  });
});
