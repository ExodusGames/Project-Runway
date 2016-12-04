Player.prototype = new Item("Player", images.player[0], 1, 1);
Player.prototype.constructor = Player;
function Player() {
	this.maxHealth = 100;
	this.health = 100;
}

