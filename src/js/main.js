let builder = {
	build: function () {
		let elShip = document.body.children[0];
		elShip.innerHTML = '';

		let rows = generator.generate();
		rows.forEach(row => this.buildRow(row));

		let highestOffset = rows.sort(({ offset: a }, { offset: b }) => {
			return b - a;
		})[0].offset;

		elShip.style['margin-left'] = (highestOffset / 2) + 'px';
	},
	
	buildRow: function ({
		tag, 
		color, 
		length, 
		offset, 
		contents
	}) {
		let el = helpers.buildElement('row c5', document.body.children[0]);
		el.style['margin-left'] = (-offset || 0) + 'px';

		let tagLeft = helpers.buildElement(`part c${color}`, el);
		tagLeft.innerText = `<${tag}>`;

		let tagInner = helpers.buildElement('part c2', el);
		tagInner.innerText = (new Array(length).fill(contents).join(''));

		let tagRight = helpers.buildElement(`part c${color}`, el);
		tagRight.innerText = `</${tag}>`;
	}
};

builder.build();
document.body.addEventListener('click', builder.build.bind(builder));
