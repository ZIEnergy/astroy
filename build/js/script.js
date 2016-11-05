$(document).ready(function(){




$(".front").slick({arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:5e3});



$(".sidebar__button").click(function(e){e.preventDefault(),$(".sidebar__links").slideToggle("fast")});

})