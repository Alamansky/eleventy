let root = 'https://andrewlamansky.com/krmonin/wp-json/wp/v2';

module.exports = {
	feed: `${root}/posts?_embed`,
	posts: `${root}/posts?_embed&categoies=2`,
	stories: `${root}/posts?_embed&categories=3`,
	profile: `${root}/profile`,
	about: `${root}/pages?_embed&slug=about-me`,
	contact: `${root}/pages?_embed&slug=contact-page`,
	social: `${root}/social`
};
