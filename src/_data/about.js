const fetch = require('node-fetch');
const endpoints = require('../../endpoints.js');

module.exports = async function () {
	const rawData = await fetch(endpoints.about);
	const about = await rawData.json();
	return about[0];
};
