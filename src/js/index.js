$(document).ready(function() {
  console.log("Hey there ;)");

  var mq = window.matchMedia( "(max-width: 768px)" );

  if (mq.matches) {
    var image = image || $(".move-image").detach()
    $(".place-image").html(image)
  }
});

$(window).resize(function() {
  var mq = window.matchMedia( "(max-width: 768px)" );
  var image = image || $(".move-image").detach()
  if (mq.matches) {
    $(".place-image").prepend(image)
  } else {
    $(".return-image").prepend(image)
  }
})

$(window).scroll(function() {
    if($(this).scrollTop() < 100) {
        $('.navbar').removeClass('opaque');
    } else {
      $('.navbar').addClass('opaque')
    }
});
