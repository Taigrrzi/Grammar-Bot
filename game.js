//document.getElementById('inner').innerHTML = '<button id="restart" type="button">Clear</button><div id="score"></div><canvas id="canvasBg" height="400px" width="400px" style="display:block;background:#FFF;margin-left:auto;margin-right:auto"></canvas><canvas id="canvasGame" height="400px" width="400px" style="display:block;margin-left:auto;margin-top:-400px;margin-right:auto"></canvas>';

var canvasBg = document.getElementById("canvasBg");
var ctxBg = canvasBg.getContext("2d");

var canvasGame = document.getElementById("canvasGame");
var ctxGame = canvasGame.getContext("2d");
/*
var imgSpriteSheet = new Image();
imgSpriteSheet.src = "spritesheet.png";
imgSpriteSheet.addEventListener("load",init,false);
*/

var nounList = new Array() ;
var adjectiveList = new Array() ;

function init() {
	drawBg();
	startDraw();
	//document.addEventListener("keydown",getKeyDown,false);
}

//Drawing
function draw() {
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

function clearFg() {
	ctxGame.clearRect(0,0,canvasWidth,canvasHeight);
}

function clearBg() {
	ctxBg.clearRect(0,0,canvasWidth,canvasHeight);
}

function Noun(strings,usages,groups,opposites) {
	this.strings = strings ;
	this.usages = usages ;
	this.groups = groups ;
	this.opposites = opposites ;
}

function Adjective(strings,usages,groups,opposites) {
	this.strings = strings ;
	this.usages = usages ;
	this.groups = groups ;
	this.opposites = opposites ;
}

function FindNoun(string) {
	for (var i = nounList.length - 1; i >= 0; i--) {
		for (var j = nounList[i].strings.length - 1; j >= 0; j--) {
			if (nounList[i].strings[j] == string) {
				return nounList[i] ;
			}
		};
	};
	return "None Found" ;
}

/*Key Objects
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
	ctxGame.drawImage(imgSpriteSheet,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
};*/

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