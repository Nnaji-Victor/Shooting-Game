var left_key = 37;
var up_key = 38;
var right_key = 39;
var down_key = 40;
var counter = 0; 

function makeDiv(){
    // vary size for fun
    var divsize = ((Math.random()*100) + 50).toFixed();
    var options = ['#f39c12','#f33412','#12f3a5','#1231f3','#86079f','#1ad20e','#dcf90f'];
    var color = options[Math.floor(Math.random()*7)];
   
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'border-radius': '50%',
        'background-color': color
    });

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).click(function() {
    	$(this).fadeOut(200, function(){
    			$(this).remove();
    			counter += 1;
    			$('#counter').text("Score: " + counter);
      			makeDiv();    		
    	}); 
	});	
}

setInterval(function () {
    var d = new Date(); //get current time
    var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
    var oneMin = 60; 
    var timeleft = oneMin - seconds % oneMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
    var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
    document.getElementById('test').innerHTML = "Time left: " + result;

}, 500) //calling it every 0.5 second to do a count down

$(document).ready(function() {
	makeDiv();
});