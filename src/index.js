//Line 2 is an instruction for ESLint during development
/* eslint-env jquery */

//The below block of code ensures that once the page has finished loading the
//event listeners and relevent code all run. 

$(document).ready(function(){
  $('.cross').hide();
  /* Event Listeners Below */
  hamburger();
  cross();
  checkHamburger();
  greeting();
});

//This function deals with the hamburger button on the Navbar.
function hamburger(){
  $('.hamburger').click( function(){
    $('.nav a').css('display', 'block');
    $('.nav-home').css('max-width','85%');
    $('.hamburger').hide();
    $('.cross').show();
  });
}

//This function deals with the cross button on the Navbar.
function cross(){
  $('.cross').click( function(){
    $('.nav-link').css('display', 'none');
    $('.nav-home').css('max-width', '65px');
    $('.cross').hide();
    $('.hamburger').show();
  });
}

//This function prints a greeting to the console for anyone interested. If you're 
//reading this comment that means you! Thank you for taking the time to look through my code. 
function greeting(){
  console.log('Hello there! Thank you for taking the time to view my website. Since you are looking at the console you are likely a fellow developer, hiring manager, or recruiter. This site was created using HTML5, CSS3, JavaScript, and jQuery. Webpack was also used during the development phase. Should you want to see the code it is all available on my Github page. A link to my account is provided at the bottom of the page. Please feel free to reach out and let me know what you think! I’m always open to feedback, conversations, or new opportunities. Thank you again and have a great day! David Omstead');
}

//This function runs when the screen is resized. It ensures that the nav bar
//components display correctly when the screen is resized. 

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
