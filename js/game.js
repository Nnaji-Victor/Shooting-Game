var left_key = 37;
var up_key = 38;
var right_key = 39;
var down_key = 40;
var counter = 0; 

function makeDiv(){
    // vary size for fun
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    while(color === '#000000')
    {
    	color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    }
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
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
      			makeDiv();    		
    	}); 
	});	
}

function timer()
{

}

$(document).ready(function() {
	makeDiv();

});