$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
   
  })
  .mouseleave(function() {
      $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  
  })
 
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().finish().animate(
      {'left':'1020px'},
      500,
      function() {$(this).hide();
        $(this).css('left','520px');
      } 
    );
     })
  .mouseup(function() {
    $('.ryu-throwing').hide();
  $('.ryu-ready').show();
  
    });
  });

$(document).on('keydown',function(e){
  if (e.which == 88) {
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
    $('.ryu-still').hide();xxx
  }
  })
 $(document).on('keyup',function(e){
    if (e.which== 88) {
    $('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-still').show();

    
    }         
  });



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
