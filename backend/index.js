const btn_reg = document.getElementById('login-register');
const btn_ret_login = document.getElementById('register-cancel');
const ctr_form = document.getElementById('index-forms');
const form_reg = document.getElementById('register');
const form_login = document.getElementById('login');

// must be strictly greater than duration for <form> transitions, see login.css
const delay = 300;

function sleep(ms) {
	return new Promise(r => setTimeout(r, ms));
}

btn_reg.addEventListener('click', async function(e) {
	ctr_form.style['flex-direction'] = 'row-reverse';
	form_login.style['transform'] = 'translateX(30%)';
	form_login.style['display'] = 'none';
	form_login.style['opacity'] = '0.0';
	// wait for transition to finish
	await sleep(delay);
	form_reg.style['transform'] = 'translateX(30%)';
	form_reg.style['transform'] = 'none';
	form_reg.style['display'] = 'flex';
	form_reg.style['opacity'] = '1.0';
	// wait for transition to finish
	await sleep(delay);
	void ctr_form.offsetWidth;
});

btn_ret_login.addEventListener('click', async function(e) {
	ctr_form.style['flex-direction'] = 'row';
	form_reg.style['transform'] = 'translateX(30%)';
	form_reg.style['display'] = "none";
	form_reg.style['opacity'] = "0.0";
	// wait for transition to finish
	await sleep(delay);
	form_login.style['transform'] = 'translateX(30%)';
	form_login.style['transform'] = 'none';
	form_login.style['display'] = "flex";
	form_login.style['opacity'] = "1.0";
	// wait for transition to finish
	await sleep(delay);
	void ctr_form.offsetWidth;
});
