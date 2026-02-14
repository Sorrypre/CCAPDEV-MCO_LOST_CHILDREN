const collapsibles = document.getElementsByClassName('collapsible-button');
for (let i = 0; i < collapsibles.length; i++) {
	collapsibles[i].addEventListener('click', function(e) {
		function nextSiblingOf(elem, css_match) {
			let sibling = elem.nextElementSibling;
			while (sibling)
				if (sibling.matches(css_match))
					return sibling;
				else
					sibling = sibling.nextElementSibling;
			return null;
		}
		const nso = nextSiblingOf(e.target, '.collapsible-target');
		if (!nso)
			return;
		nso.style['height'] = nso.matches('.folded') ? nso.scrollHeight + 'px' : '0';
		nso.classList.toggle('folded');
	});
}
