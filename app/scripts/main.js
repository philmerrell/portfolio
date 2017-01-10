// var doc = $(document),
//     elem = $('.navbar');

// elem.hide();    
// doc.scroll(function() {
//   if (doc.scrollTop() >= 50) {
//     // user scrolled 50 pixels or more;
//     // do stuff
//     elem.slideDown('fast');
//   } else {
//     elem.slideUp('fast');
//   }
// });
// $('body').scrollspy({ offset: '#featured-work' })

var navOffset = $('#navbar').height() + 25;

$('.navbar li a').click(function(event) {
    var href = $(this).attr('href');

    // Don't let the browser scroll, but still update the current address
    // in the browser.
    event.preventDefault();
    window.location.hash = href;

    // Explicitly scroll to where the browser thinks the element
    // is, but apply the offset.
    $(href)[0].scrollIntoView();
    window.scrollBy(0, -navOffset);
});