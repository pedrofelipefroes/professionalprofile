$(document).ready(function () {
  // Show/hide content according to button click
  $('#header-top').click(function () {
    $('#header-top').children('i').toggleClass('rotate-180deg');
  })
  
  $('#header-work').click(function () {
    $('#header-work').toggleClass('box-shadow');
    $('#content-work').slideToggle('slow');
    $('#header-work').children('i').toggleClass('rotate-180deg');
  });
  
  $('#header-design').click(function () {
    $('#header-design').toggleClass('box-shadow');
    $('#content-design').slideToggle('slow');
    $('#header-design').children('i').toggleClass('rotate-180deg');
  });
  
  $('#header-drawings').click(function () {
    $('#header-drawings').toggleClass('box-shadow');
    $('#content-drawings').slideToggle('slow');
    $('#header-drawings').children('i').toggleClass('rotate-180deg');
  });
});

// Slider
var slideIndex = 1;

function slideShow(container, n) {
  var slideNum = $(container).length - 1;
  
  if (n > slideNum)
    slideIndex = 1;

  if (n < 1)
    slideIndex = slideNum;

  for (var i = 0; i < slideNum; i++)
    $(container)[i].style.display = 'none';
  
  $(container)[slideIndex-1].style.display = 'flex';
}

function slideSwitch(container, i) {
  slideShow(container += ' div', slideIndex += i);
}

slideShow('#slider-design-logos div', slideIndex);
slideShow('#slider-design-ui div', slideIndex);
slideShow('#slider-drawings div', slideIndex);