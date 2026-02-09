import express from 'express';

const xj = express();
const xjr = express.Router();

xjr.post('/lu', (q, r) => {
	const cru = q.body['login-username'];
	const crp = q.body['login-password'];
	console.log('login attempted: ' + cru + ' ' + crp);
	r.send('w');
});

export default xjr;