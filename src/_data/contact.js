const fetch = require('node-fetch');
const endpoints = require('../../endpoints.js');

module.exports = async function () {
	const rawData = await fetch(endpoints.contact);
	const contact = await rawData.json();
	return contact[0];
};
