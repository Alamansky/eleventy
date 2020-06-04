/* ---
pagination:
    data: posts
    size: 1
    alias: post
permalink: "post/{{ post.key | slug }}/"
--- */

class Post {
    get data() {
        return {
            pagination: {
                data: "posts",
                size: 1,
                alias: "post",
            },
            permalink: data => `/post/${data.post.key}/`
        };
    }

    render(data) {
        console.log(data.post.key);
        return `<p>${data.post.key}</p>`;
    }
}

module.exports = Post;