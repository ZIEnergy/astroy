$('.sidebar__button').click(function(e) {
  e.preventDefault();
  $('.sidebar__links').slideToggle('fast');
});