// import express from 'express';
// const app = express();
// const PORT = 3000;
//
// app.get('/', (req, res) => res.send('Express + TypeScript Server'));
//
// app.listen(PORT, () => {
// 	console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);