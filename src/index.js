/* eslint-env jquery */

$(document).ready(function(){
  $('.cross').hide();
  // $('.nav-skills, .nav-projects, .nav-about-me, .nav-contact-me').hide();
  
  /* Event Listeners Below */
  hamburger();
  cross();
  checkHamburger();
  
  // checkSize();
  // $(window).resize(checkSize);

  console.log('The page loaded and the index.js file ran');
});

function hamburger(){
  $('.hamburger').click( function(){
    console.log('hamburger button was clicked');
    $('.nav a').css('display', 'block');
    $('.nav-home').css('max-width','85%');
    $('.hamburger').hide();
    $('.cross').show();
    // $('.nav a').css('float', 'none');
    // $('.nav a').css('text-align', 'left');
    // $('.nav-skills, .nav-projects, .nav-about-me, .nav-contact-me').toggle(function(){
    //   $('.hamburger').hide();
    //   $('.cross').show();
    // });
  });
}

function cross(){
  $('.cross').click( function(){
    console.log('cross button was clicked');
    $('.nav-link').css('display', 'none');
    $('.nav-home').css('max-width', '65px');
    $('.cross').hide();
    $('.hamburger').show();
    // $('.nav a').css('float', 'left');
    // $('.nav a').css('text-align', 'center');
    // $('.nav-skills, .nav-projects, .nav-about-me, .nav-contact-me').toggle(function(){
    //   $('.cross').hide();
    //   $('.hamburger').show();
    // });
  });
}

// function checkSize(){
//   if ($('.sizeChecker').css('display') === 'none'){
//     console.log('checkSize ran');
//   }
// }

function checkHamburger(){
  $(window).on('resize',function(){

    //This block of code runs when the screen is larger than 700px
    if( $('.skillSymbolsAndList').css('display') === 'flex'){
      if( $('.hamburger').css('display') === 'none'){
        $('.nav-link').css('display','block');
        $('.cross').css('display','none');
      } 
    }
    //This block of code runs when the screen is smaller than 700px
    else if($('.skillSymbolsAndList').css('display') !== 'flex'){
      $('.hamburger').show();
      $('.nav-home').css('max-width', '65px');
      $('.cross').hide();
      $('.nav-link').hide();
    } 
  });
}

/* on line 56 following the first if I wanted to add a second if regarding 
the size of the screen if it was bigger than 700px */