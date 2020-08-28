const fetch = require('node-fetch');
const endpoints = require('../../endpoints.js');

module.exports = async function () {
	const rawData = await fetch(endpoints.stories);
	const stories = await rawData.json();
	return stories;
};
