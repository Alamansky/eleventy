const fetch = require('node-fetch');
const endpoints = require('../../endpoints.js');

module.exports = async function () {
	const rawData = await fetch(endpoints.profile);
	const profile = await rawData.json();
	return profile[0];
};
