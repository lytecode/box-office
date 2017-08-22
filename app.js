let key = require('dotenv').config();


const express = require('express');
const request = require('request-promise');


const app = express();



app.get('/api/:title', (req, res) => {

	request({
		uri: 'https://api.themoviedb.org/3/search/movie',
		qs: {
			api_key: process.env.API_KEY,
			query: req.params.title
		},
		json: true
	})
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.log(err)
	})

});


app.listen(4000);
