document.getElementById('inner').innerHTML = '<button id="restartBtn" type="button">Start/Restart</button><div id="score"></div><canvas id="canvasBg" height="400px" width="400px" style="display:block;background:#FFF;margin-left:auto;margin-right:auto"></canvas><canvas id="canvasGame" height="400px" width="400px" style="display:block;margin-left:auto;margin-top:-400px;margin-right:auto"></canvas>';

var canvasBg = document.getElementById("canvasBg");
var ctxBg = canvasBg.getContext("2d");

var canvasGame = document.getElementById("canvasGame");
var ctxGame = canvasGame.getContext("2d");

var key1;
var canvasWidth = canvasBg.width;
var canvasHeight = canvasBg.height;
var fps = 100/60;
var drawInterval;
var level;
var score;

var restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click",init,false);

var imgSpriteSheet = new Image();
imgSpriteSheet.src = "spritesheet.png";
imgSpriteSheet.addEventListener("load",init,false);

function init() {
	drawBg();
	startDraw();
	key1 = new Key();
	document.addEventListener("keydown",getKeyDown,false);
	score = 0;
	level = 1;	
}

//Drawing
function draw() {
	key1.x += key1.hspeed;
	key1.y += key1.vspeed;
	if (key1.x > 400 || key1.x < -100 || key1.y > 400 || key1.y < -100){
		key1 = new Key();
	}
	if (key1.visible === 1) {
		key1.draw();
	} else {
		clearKey();
	}
	document.getElementById("score").innerHTML = score.toString();
}

function startDraw() {
	stopDraw();
	drawInterval = setInterval(draw,fps)
}

function stopDraw() {
	clearInterval(drawInterval);
}

function drawBg() {
	var srcX = 0;  //Where on the sprite sheet
	var srcY = 0;
	var drawX = 0; //Where on the canvas
	var drawY = 0;
	ctxBg.drawImage(imgSpriteSheet,srcX,srcY,canvasWidth,canvasHeight,drawX,drawY,canvasWidth,canvasHeight)
}

function clearKey() {
	ctxGame.clearRect(0,0,canvasWidth,canvasHeight);
}

function clearBg() {
	ctxBg.clearRect(0,0,canvasWidth,canvasHeight);
}

//Key Objects
function Key() { //Object constructor
	this.side = Math.floor(Math.random() * 4); 		//0 - Down, 1 - Left, 2 - Up, 3 - Right
	this.direction = Math.floor(Math.random() * 4);
	
	this.srcX = 100 * this.direction;
	this.srcY = 400;
	this.width = 100;
	this.height = 100;
	this.x = 150 + (this.side % 2) * (this.side - 2) * 250;
	this.y = 150 + ((this.side % 2) - 1) * (this.side - 1) * -250;
	this.visible = 1;
	
	this.hspeed = (this.side % 2) * (this.side - 2) * -1 * level;
	this.vspeed = ((this.side % 2) - 1) * (this.side - 1) * level;
}

Key.prototype.draw = function() {
	clearKey();
	ctxGame.drawImage(imgSpriteSheet,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};

Key.prototype.checkCentre = function(dir) {
	if(this.x > 130 && this.x < 170 && this.y > 130 && this.y < 170){
		if(dir === this.direction) {
			key1.visible = 0;
			score += 1;
			level += 0.05;
		}
	}
};

//Keyboard Checking
function getKeyDown(e) {
	var keyID = e.keyCode || e.which; //Browser Universality
	if (keyID === 38) {       //Up Arrow
		e.preventDefault();
		key1.checkCentre(2);
	} else if (keyID === 39) {       //Right Arrow
		e.preventDefault();
		key1.checkCentre(3)
	} else if (keyID === 40) {       //Down Arrow
		e.preventDefault();
		key1.checkCentre(0)
	} else if (keyID === 37) {       //Left Arrow
		e.preventDefault();
		key1.checkCentre(1)
	}
}