const fetch = require("node-fetch");
const endpoints = require('../endpoints.json');

module.exports = async function () {
    const rawData = await fetch(endpoints.posts);
    const posts = await rawData.json();
    return posts;
}