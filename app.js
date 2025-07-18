const express = require('express');
const path = require('node:path');
const app = express();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index', { title: 'Mini message dashboard', messages: messages });
});

app.get('/new', (req, res) => {
    res.render('messageForm');
});

app.post('/new', (req, res) => {
	const messageText = req.body.authorMessage;
	const author = req.body.authorName;

	messages.push({ text: messageText, user: author, added: new Date() });

	res.redirect('/');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);   

module.exports = messages;
