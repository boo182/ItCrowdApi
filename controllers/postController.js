import PostModel from '../models/postModel';
import ObjectUtils from '../utils/objectUtils';

class PostController {
    // Getters
    async getRepost(id) {
        return {post: `this is repost n ${id}`};
    }

    async getArticle (id) {
        return {post: `Article n°${id}`};
    }

    // Setters
    async newArticle(article) {
        return PostModel.newArtcile(article);
    }
    async newRepost(post) {
        const tags = {tags: post.tags.join()};
        return PostModel.newRepost(ObjectUtils.objectUpdater(post, [tags]));
    }
    async newVideo(video) {
        return {title: post.title}
    }
}
const postController = new PostController()
export default postController