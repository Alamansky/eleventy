const fetch = require('node-fetch');
const endpoints = require('../../endpoints.js');

module.exports = async function () {
	const rawData = await fetch(endpoints.feed);
	const feed = await rawData.json();
	return feed;
};
