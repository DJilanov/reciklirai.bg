const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 12000;

app
	.use(express.static(path.join(__dirname, 'dist')))
	.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')))
	.listen(PORT, () => console.log(`Listening On Port : ${ PORT }`));