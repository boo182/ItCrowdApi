import knex from 'knex';

class PostModel {
    async newArticle(article) {
        return article;
    }
    async newRepost(post) {
        console.log(post);
        return post
    }
}

const postModel = new PostModel();
export default postModel;