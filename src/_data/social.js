const fetch = require('node-fetch');
const endpoints = require('../../endpoints.js');

module.exports = async function () {
	const rawData = await fetch(endpoints.social);
	const social = await rawData.json();
	return social[0];
};
