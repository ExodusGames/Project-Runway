var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var div = document.getElementById("gameSpace");

div.height = 584;
div.width = 694;

canvas.height = div.height;
canvas.width = div.width; 

gameData.ctx = ctx;

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Define some constants to use as directions instead of remembering the numbers
var D_LEFT = 37, D_RIGHT = 39, D_UP = 38, D_DOWN = 40;

function loadImages(imgs, callback) {
	var totalLoaded = 0;
	for (var key in imgs) {
		imgs[key][0].onload = function() {
			totalLoaded++;
			if (totalLoaded == Object.size(imgs)) {
				callback();
			}
		};
		imgs[key][0].src = "img/" + imgs[key][1];
	}
}

gameData.player = new Player();

gameData.map = getStartMap();

loadImages(images, function() {
	gameData.map.draw();
});

