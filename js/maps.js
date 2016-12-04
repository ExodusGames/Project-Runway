function Map(gameData, bgImage) {
	this.tileSize = 32;
	this.width = 20;
	this.height = 20;
	this.tiles = [];
	this.initialized = false;
}

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

