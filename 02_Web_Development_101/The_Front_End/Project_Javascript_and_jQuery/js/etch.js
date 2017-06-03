$(document).ready(function(){

	createGrid(960,16)
   	fillPalette();

	// default color:
	var currentColor = '#000';
	$("#color").css('background-color', currentColor); 

	// color change
	$(".colorblock").mouseover(function(event) {
		currentColor = $(this).css('background-color');
		$("#color").css('background-color', currentColor); 
	});

	// draw
	$(".block").mouseover(function(event) {
		$(this).css("background-color", currentColor);
		console.log('drawing!')
	});

	$('#reset').click(function(event) {
		/* Act on the event */
		reset();
			// draw
		$(".block").mouseover(function(event) {
			$(this).css("background-color", currentColor);
			console.log('drawing!')
	});
	});

});


// Create grid
function createGrid(etchsize,rowsize){

	$('#info').text("grid size: "+rowsize+"x"+rowsize);

	$('#etch-container').empty();


	$('#etch-container').css("width", etchsize);

	var size = rowsize;
	var $etch = $('#etch-container')
	var block = ("<div class='block'></div>")

	for (var i = 0; i < size*size; i++) {
		$etch.append(block);
	}

	// adapt size of each block
	var blocksize = $etch.width() / size;
	$(".block").css("width", blocksize);
	$(".block").css("height", blocksize);
}

function fillPalette(){
	$('#palette').append("<div class='colorblock' style='background-color:white'></div>");
	$('#palette').append("<div class='colorblock' style='background-color:black'></div>");

	for (var i = 0; i < 8; i++) {
		c = getRandomColor();
		var colorblock = ("<div class='colorblock' style='background-color:"+c+"'></div>")
		$('#palette').append(colorblock);
	}
}

function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

function reset(){
    var txt;
    var size = prompt("How many squares per sides you want?:", "16");
    
    console.log(isNaN(size));
    if (isNaN(size) || size == "") {
        createGrid(960,16);
    } else {
        createGrid(960,size);
    }
    
}


