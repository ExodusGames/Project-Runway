function Map(gameData, bgImage) {
	this.tileSize = 32;
	this.width = 20;
	this.height = 18;
	this.tiles = [];
	this.initialized = false;
}

Map.prototype.gameData = gameData;

Map.prototype.init = function() {
	this.tiles = [];
	for (var y = 0; y < this.height; y++) {
		this.tiles.push([]);
		for (var x = 0; x < this.width; x++) {
			this.tiles[y][x] = undefined;
		}
	}
	this.initialized = true;
}

Map.prototype.addTileAtPoint = function(item, point) {
	this.tiles[point.y][point.x] = item;
}

Map.prototype.draw = function() {
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			if (this.tiles[y][x]) {
				this.tiles[y][x].draw();
			}
		}
	}
}

Map.prototype.moveItem = function(item, keyCode){

console.log(keyCode);

var oldPos = item.position;

var newPos;

	switch (keyCode) {
		case D_LEFT:
			newPos = { x: oldPos.x - 1, y: oldPos.y };
			break;
		case D_UP:
			newPos = { x: oldPos.x, y: oldPos.y - 1 };
			break;
		case D_RIGHT:
			newPos = { x: oldPos.x + 1, y: oldPos.y };
			break
		case D_DOWN:
			newPos = { x: oldPos.x, y: oldPos.y + 1 };
			break;
		default:
			return false;
	}

	item.position = newPos;

	if (newPos.y >= 0 && newPos.y <= this.height -1 && newPos.x >= 0 && newPos.x <= this.width -1 )  {

	this.tiles[newPos.y][newPos.x] = item;

	this.tiles[oldPos.y][oldPos.x] = undefined;

	this.drawTileAtPosition(newPos)
	this.drawTileAtPosition(oldPos)


}

else {item.position = oldPos;
}
	
	
	
}

Map.prototype.drawTileAtPosition = function(pos) {
	
	console.log(pos)

	var tile = this.tiles[pos.y][pos.x];
	var size = tile ? [tile.width, tile.height] : [1, 1];

	this.gameData.ctx.clearRect(pos.x * this.tileSize, pos.y * this.tileSize, size[0] * this.tileSize, size[1] * this.tileSize);

	if (tile) { tile.draw() }
};




