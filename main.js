canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greenCarWidth = 75;
greenCarHeight = 100;
greenCarX = 5;
greenCarY = 225;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

 

function add() {
	backgroundImage = new Image();
    backgroundImage.onload = uploadBackground;
    backgroundImage.src = background_image;
    greencarImg = new Image();
    greencarImg.onload = greencar_image;
    greencarImg.src = greencar_image ;
}

function uploadBackground() {
	ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencarImg,greenCarX,greenCarY,greenCarWidth, greenCarHeight);

	}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greenCarY>=10){
		greencarImg = greencarImg-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greenCarY<=300){
		greenCarY = greenCarY+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greenCarX>=10){
		greenCarX = greenCarX-10
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greenCarX=690){
		greenCarX = greenCarX+10;
		uploadBackground();
		uploadgreencar();	
	}
}
