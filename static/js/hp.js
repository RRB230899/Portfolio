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

var commands = [
  {
    indexes: ["I solemnly swear that I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
      $('#wrapper_div').css('display', 'block'); // Add active class
      scrollToTheTop();
    }
  },
  {
    indexes: ["I solemnly swear that I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
      $('#wrapper_div').css('display', 'block'); // Add active class
      scrollToTheTop();
    }
  },
  {
    indexes: ["I solemnly swear that I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
      $('#wrapper_div').css('display', 'block'); // Add active class
      scrollToTheTop();
    }
  },
  {
    indexes: ["I so lonely swear that I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
      $('#wrapper_div').css('display', 'block');// Add active class
      scrollToTheTop();
    }
  },
  {
    indexes: ["I so lonely swear that I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
      $('#wrapper_div').css('display', 'block');// Add active class
      scrollToTheTop();
    }
  },
  {
    indexes: ["I solomly swear that I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["swear that I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["swear that I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solimly swear that I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solimly swear that I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solublee  swear that I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solublee  swear that I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I am up to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I am up to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solemnly swear that I have to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solemnly swear that I have to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solely swear that I have to no good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["I solely swear that I have to know good"],
    action: function() {
      console.log("Welcome.")
      $('.map-base').addClass('active');
      $('.main-content').css({'margin': 0, 'text-align': 'left'});
       $('#wrapper_div').css('display', 'block');// Add active class
       scrollToTheTop();
    }
  },
  {
    indexes: ["Mischief managed"],
    action: function() {
      console.log("Mischief managed.")
      $('.map-base').removeClass('active');
      $('#wrapper_div').css('display', 'none');
      $('.main-content').css('text-align', 'center');
      scrollToTheTop();
    }
  },
  {
    indexes: ["Mischief manage"],
    action: function() {
      console.log("Mischief managed.")
      $('.map-base').removeClass('active');
      $('#wrapper_div').css('display', 'none');
      $('.main-content').css('text-align', 'center');
      scrollToTheTop();
    }
  },
  {
    indexes: ["my chief managed"],
    action: function() {
      console.log("Mischief managed.")
      $('.map-base').removeClass('active');
      $('#wrapper_div').css('display', 'none');
      $('.main-content').css('text-align', 'center');
      scrollToTheTop();
    }
  },
  {
    indexes: ["my chief managed"],
    action: function() {
      console.log("Mischief managed.")
      $('.map-base').removeClass('active');
      $('#wrapper_div').css('display', 'none');
      $('.main-content').css('text-align', 'center');
      scrollToTheTop();
    }
  },
];

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