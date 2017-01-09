var doc = $(document),
    elem = $('.navbar');

elem.hide();    
doc.scroll(function() {
  if (doc.scrollTop() >= 50) {
    // user scrolled 50 pixels or more;
    // do stuff
    elem.slideDown('fast');
  } else {
    elem.slideUp('fast');
  }
});

function scrollToFeatured() {
    $('body').scrollspy({ target: '#featured-work' })
}