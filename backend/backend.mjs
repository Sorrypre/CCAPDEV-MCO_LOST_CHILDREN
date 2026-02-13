// Externals
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Server files
import login from './login.mjs';
// ...

const port = 2222;
const xj = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

xj.use(express.urlencoded({ extended: true }));
xj.use(express.json());
xj.use(express.static(path.join(__dirname, '../')));
/*xj.use(express.static(__dirname));*/
xj.use(cors());
xj.use(login);
xj.get('/', (q, r) => {
	r.redirect('/frontend/pages/');
});
xj.listen(port, '127.0.0.1', () => {
	console.log('server is now on listen @ port ' + port);
});
