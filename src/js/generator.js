let generator = {
	generate: function () {
		let rows = [];

		let rowCount = helpers.randInt(~~(config.rows.min / 2), ~~(config.rows.max / 2));

		let index = 0;
		for (let i = 0; i < rowCount; i++) {
			let row = {
				tag: helpers.randPick(config.parts),
				color: helpers.randPick(config.colors),
				length: helpers.randInt(config.length.min, config.length.max),
				offset: helpers.randInt(config.offset.min, config.offset.max),
				contents: helpers.randPick(config.contents)
			};

			rows.splice(rows.length - index, 0, row);
			rows.splice(index, 0, row);

			index++;
		}

		return rows;
	}
};
