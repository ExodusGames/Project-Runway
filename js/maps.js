function Map(gameData, bgImage) {
	//cade stuff
	this.tileSize = 32;
	this.width = 20;
	this. height = 20;
	//taylor stuff
}

Map.prototype.init = function() {
	this.tiles = [];
	for (var y = 0; y < this.height; y++) {
		this.tiles.push([]);
		for (var x = 0; x < this.width; x++) {
			this.tiles[y][x] = undefined;
		}
	}
}

Map.prototype.addTileAtPoint = function(item, point) {
	this.tiles[point.y][point.x] = item;
}

Map.prototype.draw = function() {
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			this.tiles[y][x].draw();
		}
	}
}