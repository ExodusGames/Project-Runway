function Item(name, sprite, width, height) {
	this.name = name;
	this.sprite = sprite;
	this.width = width;
	this.height = height;

	this.movable = false;

	this.position = {x: 0, y: 0};

	this.permeable = false;

	this.func = false;
}

Item.prototype.gameData = gameData;

Item.prototype.draw = function() {
	var s = this.gameData.tileSize;
	this.gameData.ctx.drawImage(this.sprite, this.position.x * s , this.position.y * s, this.width * s, this.height * s);
}

var images = {
	player: [new Image(), "player.png"]
	//player: [new Image(), "player.png"],
	//grass: [new Image(), "grass.png"]
};

