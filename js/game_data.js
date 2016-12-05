function GameData(tileSize){
	this.player = undefined;
	this.tileSize = tileSize;
	this.map = undefined;
	this.ctx = undefined;
}

var gameData = new GameData(32);

var D_LEFT = 37, D_RIGHT = 39, D_UP = 38, D_DOWN = 40;

// //Map.prototype.moveItem = function(){

// var oldPos = item.position;

// var newPos;

// 	switch (keyCode) {
// 		case D_LEFT:
// 			newPos = { x: oldPos.x - 1, y: oldPos.y };
// 			break;
// 		case D_UP:
// 			newPos = { x: oldPos.x, y: oldPos.y - 1 };
// 			break;
// 		case D_RIGHT:
// 			newPos = { x: oldPos.x + 1, y: oldPos.y };
// 			break
// 		case D_DOWN:
// 			newPos = { x: oldPos.x, y: oldPos.y + 1 };
// 			break;
// 		default:
// 			return false;
// 	}

// 	item.position = newPos;

// 	// Add it to the map
// 	this.tiles[newPos.y][newPos.x] = item;

// 	// Reset the old tile
// 	this.tiles[oldPos.y][oldPos.x] = undefined;

// 	item.draw ();
	
// }