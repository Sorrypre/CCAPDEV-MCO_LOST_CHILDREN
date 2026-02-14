async function sleep(ms) {
	return new Promise(function(e) {
		setTimeout(e, ms);
	});
}

function nextSiblingOf(elem, css_match) {
	let sibling = elem.nextElementSibling;
	while (sibling)
		if (sibling.matches(css_match))
			return sibling;
		else
			sibling = sibling.nextElementSibling;
	return null;
}

const collapsibles = document.getElementsByClassName('collapsible-button');
if (collapsibles) {
	for (let i = 0; i < collapsibles.length; i++) {
		collapsibles[i].addEventListener('click', async function(e) {
			if (e.target.hasAttribute('disabled'))
				return;
			e.target.setAttribute('disabled', '');
			const nso = nextSiblingOf(e.target, '.collapsible-target');
			if (!nso)
				return;
			if (!nso.matches('.folded')) {
				nso.style['height'] = nso.scrollHeight + 'px';
				await sleep(200);
			}
			nso.style['height'] = nso.matches('.folded') ? nso.scrollHeight + 'px' : '0';
			nso.classList.toggle('folded');
			nso.addEventListener('transitionend', function() {
				if (!nso.matches('.folded'))
					nso.style['height'] = 'auto';
			}, { once: true });
			e.target.removeAttribute('disabled');
		});
	}
}
