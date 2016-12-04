var mapList = {
	start: new Map()
};

function getStartMap() {
	var m = mapList.start;
	if (!m.initialized) {
		m.init();
		m.tiles[0][0] = gameData.player;
	}
	return m;
}

