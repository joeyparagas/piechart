// Hover on each pie slice, remove other visibility class 
// Add visibility to selected slice 
$('.pie').hover(
  function () {
    const x = $(this).parent();
    for (let i = 1; i < 11; i++) {
      // Check if ID matches selected slice
      if (x[0].id == 'pieSlice' + i) {
        $('.innerCircle div').removeClass('is-visible');
        $('.content' + i).addClass('is-visible');
        $(this).children('.sub-title').addClass('is-visible');
      }
    }
  }, function () {
    $('.sub-title').removeClass('is-visible');
  }
);

// Remove all visibility & add to main title upon exiting pie
$('.container').hover(
  function () {
    $('.innerCircle div').removeClass('is-visible')
    $('.content-title').addClass('is-visible')
  }
)
