var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});

let navBtns = document.querySelectorAll('[data-btn]');
navBtns.forEach(function(e) {
    e.addEventListener('click', function(e) {
        e.preventDefault();
       section = document.querySelector('.'+$(this).attr('data-btn'))
       section.scrollIntoView({behavior: "smooth"});
    })
})