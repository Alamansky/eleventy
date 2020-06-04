module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./scss/');
	eleventyConfig.addWatchTarget('./scripts/');
	return {
		dir: {
			includes: '_includes',
			layouts: '_layouts',
		},
	};
};
