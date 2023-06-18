//js
 wow = new WOW(
{
       boxClass:     'wow',      // default
       animateClass: 'animated', // default
       offset:       0,          // default
       mobile:       true,       // default
       live:         true        // default
})
wow.init();


//jq




$(document).ready(function(){
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});
       
//counter up animation

// $(selector).countMe(delay,speed)

$("#num1").countMe(40,65);
$("#num2").countMe(40,65);
$("#num3").countMe(40,65);

//

var mixer = mixitup('#hello', {
    
    animation: {
        duration: 300
    }
});

//
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });



});