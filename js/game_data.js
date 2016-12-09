function GameData(tileSize){
	this.player = undefined;
	this.tileSize = tileSize;
	this.map = undefined;
	this.ctx = undefined;
}

var gameData = new GameData(32);

var D_LEFT = 37, D_RIGHT = 39, D_UP = 38, D_DOWN = 40;

