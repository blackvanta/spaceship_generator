let helpers = {
	randInt: function (low, high) {
		return low + ~~(Math.random() * (high - low + 1));
	},

	randPick: function (options) {
		return options[this.randInt(0, options.length - 1)];
	},

	buildElement: function (className, parentNode) {
		let el = document.createElement('div');
		el.setAttribute('class', className);

		parentNode.appendChild(el);

		return el;
	}
};
