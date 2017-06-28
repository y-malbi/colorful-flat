var $topMenu = $('.header-navigation-menu'),
    $showMenuBtn = $('#show-menu');

//Smooth scroll
$topMenu.on('click', 'a', function(event){
  event.preventDefault();
  var link = $(this).attr('href');
  var distanse = $(link).offset().top; 
  $('html, body').animate({
  scrollTop: distanse
  }, 500);
});

//Small header
$(window).scroll(function(){
  var dist = $('.home').offset().top;
  if ($(window).scrollTop() <= dist){
    $('header').removeClass('small');
  }else{
    $('header').addClass('small');
  }
});

//Active menu item
$('[href="#home"]').addClass('active');
  
$('.header-navigation-menu > li > a').click(function(e){
  if ($(this).hasClass('active')){
  }else{
    $('.header-navigation-menu > li > a').removeClass('active')
    $(this).addClass('active');
  }
});

// Responsive menu
$showMenuBtn.on('click', function(){
  if ($topMenu.hasClass('open')){
    $topMenu.removeClass('open');
    $(this).find('span')
         .removeClass('icon-cross')
         .addClass('icon-menu');
  }
  else{
    $topMenu.addClass('open');
    $(this).find('span')
         .removeClass('icon-menu')
         .addClass('icon-cross');
  }
});
$(window).resize(function(){
  if ($(window).width() > 979){
    $topMenu.removeClass('animation')
        .removeClass('open');
    $showMenuBtn.find('span')
         .removeClass('icon-cross')
         .addClass('icon-menu');
  }else{
    $topMenu.addClass('animation');
  }
});

$topMenu.on('click', 'a', function(){
  $topMenu.removeClass('open');
  $showMenuBtn.find('span')
        .removeClass('icon-cross')
         .addClass('icon-menu');
});


// Slider
$(document).ready(function(){
  $('.slide-content').slick({
      dots: true
  });
});


//Accordion
$('#accordion').on('click', '.title', function(){
  $('.title').removeClass('active');
  $(this).addClass('active');
});


//Lightbox
lightbox.option({
  'imageFadeDuration': 1000,
  'positionFromTop': 150,
  'wrapAround': true
});


//Tabs
$('.tab-content').hide();
$('.tab-content.active').show();
$('.tab-title').click(function(){
  var title_id = $(this).attr('data-target');
  $('li').removeClass('active-title');
  $(this).parent().addClass('active-title');
  $('.tab-content').removeClass('active').hide(600);
  $('#'+ title_id).addClass('active').show(600);
});

//Modal window
$('.show-btn').click(function(e){
  e.preventDefault();
  var modal_id = $(this).attr('data-target');
  $('.portfolio').append('<div class="modal-bg"></div>');
  $('#'+ modal_id).addClass('active');
});

$('.close-btn').click(function(){
  $('.modal-bg').remove();
  $(this).parents('.modal').removeClass('active');
});