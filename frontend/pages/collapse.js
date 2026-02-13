const collapsibles = document.getElementsByClassName('collapsible');

function nextSiblingOf(elem, css_match) {
	let sibling = elem.nextElementSibling;
	while (sibling) {
		if (sibling.matches(css_match))
			return sibling;
		else
			sibling = sibling.nextElementSibling;
	}
	return null;
}

for (let i = 0; i < collapsibles.length; i++) {
	collapsibles[i].addEventListener('click', function(e) {
		const nearestSibling = nextSiblingOf(e.target, '.collapsible-element');
		if (!nearestSibling)
			continue;
		
	})
}