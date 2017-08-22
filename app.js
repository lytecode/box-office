let key = require('dotenv').config();


const express = require('express');
const request = require('request-promise');


const app = express();


//query the for movies using the movie title
app.get('/api/search/:title', (req, res) => {

	request({
		uri: 'https://api.themoviedb.org/3/search/movie',
		qs: {
			api_key: process.env.API_KEY,
			query: req.params.title
		},
		json: true
	})
	.then((data) => {
		console.log("Hello, This is the search route and you searched for movie " +req.params.title );
	})
	.catch((err) => {
		console.log(err)
	})

});


//query the api by movie category
app.get('/api/load/:category', (req, res) => {

	request({
		uri: 'https://api.themoviedb.org/3/search/movie',
		qs: {
			api_key: process.env.API_KEY,
			query: req.params.category
		},
		json: true
	})
	.then((data) => {
		console.log("Hello, this is the load route, and you loaded movies in category " +req.params.category);
	})
	.catch((err) => {
		console.log(err)
	})

});


app.listen(4000);
