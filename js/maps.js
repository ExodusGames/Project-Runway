function Map(gameData, bgImage) {
	//cade stuff
	this.tileSize =
	this.width =
	this. height =
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
