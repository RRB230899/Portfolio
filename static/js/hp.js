//toggle button
$('.js-toggle').on('click', function(){
  scrollToTheTop();
  $('.map-base').toggleClass('active');
  if ($('.map-base').hasClass('active')){
    $('.main-content').css({'margin': 0, 'text-align': 'left'});
    $('#wrapper_div').css('display', 'block');
  }
  else{
    $('#wrapper_div').css('display', 'none');
    $('.main-content').css('text-align', 'center');
  }
});

function scrollToTheTop(){
    $('html, body').animate({
    scrollTop: 0
  }, 500); // Adjust the duration as needed
}

//initialization of speech recognition starts here
const debugMode = true;
const artyom = new Artyom();
console.log()

if (debugMode) {
  artyom.redirectRecognizedTextOutput(function(text) {
    console.log("Recognized Text:", text); // Log recognized text
  });
  }

const phrases = [
  "I solemnly swear that I am up to no good",
  "I solemnly swear that I am up to know good",
  "I so lonely swear that I am up to no good",
  "I so lonely swear that I am up to know good",
  "I solomly swear that I am up to no good",
  "I solomly swear that I am up to know good",
  "I solublee swear that I am up to no good",
  "I solublee swear that I am up to know good",
  "I am up to no good",
  "I am up to know good",
  "I am up to no good",
  "I am up to know good",
  "I am up to no good",
  "I am up to know good",
  "I'm up to no good",
  "I'm up to know good",
  "I solely swear that I have to no good",
  "I solely swear that I have to know good",
  "I solely swear that I have to no good",
  "I solely swear that I have to know good",
  "Mischief managed",
  "Mischief manage",
  "my chief managed"
];

const commands = phrases.map(phrase => ({
  indexes: [phrase],
  action: function() {
    console.log(phrase.includes("Mischief") ? "Mischief managed." : "Welcome.");
    if (phrase.includes("Mischief")) {
      $('.map-base').removeClass('active');
      $('#wrapper_div').css('display', 'none');
      $('.main-content').css('text-align', 'center');
    } else {
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
      $('#wrapper_div').css('display', 'block');
    }
    scrollToTheTop();
  }
}));

artyom.addCommands(commands);

function startContinuousArtyom() {
  artyom.fatality();

  setTimeout(function() {
    artyom.initialize({
      lang: "en-US",
      continuous: true,
      listen: true,
      speed: 1
    }).then(function() {
      console.log("Ready to work! Part II.");
    });
  }, 50);
}

startContinuousArtyom();