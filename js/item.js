function Item(name, sprite, width, height, gameData) {
	this.name = name;
	this.sprite = sprite;
	this.width = width;
	this.height = height;

	this.gameData = gameData;

	this.movable = false;

	this.position = {x: 0, y: 0};

	this.permeable = false;

	this.func = false;
}