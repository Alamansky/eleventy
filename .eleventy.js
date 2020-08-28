module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget('./scss/');
	eleventyConfig.addWatchTarget('./scripts/');
	return {
		dir: {
			input: 'src',
			includes: './_includes',
			layouts: './_layouts',
		},
	};
};
