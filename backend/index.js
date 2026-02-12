const btn_reg = document.getElementById('login-register');
const btn_ret_login = document.getElementById('register-cancel');
const form_reg = document.getElementById('register');
const form_login = document.getElementById('login');

btn_reg.addEventListener('click', function(e) {
	form_reg.style.display = "flex";
	form_login.style.display = "none";
});

btn_ret_login.addEventListener('click', function(e) {
	form_reg.style.display = "none";
	form_login.style.display = "flex";
});