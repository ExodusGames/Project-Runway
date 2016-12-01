function Item(name, sprite, width, height, gameData, movable = false, permeable = false, func = function() {}) {
	this.name = name;
	this.sprite = sprite;
	this.width = width;
	this.height = height;

	this.gameData = gameData;

	this.movable = movable;

	this.position = {x: 0, y: 0};

	this.permeable = permeable;

	this.func = func;
}