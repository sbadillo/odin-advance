$(document).ready(function(){

	createGrid(960,16)
   	fillPalette();


	// shake action!
	$('#shake').click(async function(){
		$('#etch-container').addClass('shake-constant shake-chunk')
		shake();
		await sleep(600);
		$('#etch-container').removeClass('shake-constant shake-chunk')
		;
	});

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
    if (!size || isNaN(size) || size >50 || size<=0)  {
    	console.log('false input, back to default :o')
    	alert('Please enter only numbers between 1 and 50');
        createGrid(960,16);
    } else {
        createGrid(960,size);
    }   
}

function shake(){

	// $("#etch-container").addClass('shake-rotate');

	var total = $("#etch-container > div").length;
	var erase = Math.floor(total* 0.50);

	Math.floor((Math.random() * 10) + 1);

	for (var i = 0; i < erase; i++) {
		eraseme = Math.floor((Math.random() * total) + 1);
		$("#etch-container > div").eq(eraseme).css("background-color", "#fff")
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}