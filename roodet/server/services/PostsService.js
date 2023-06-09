import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
class PostsService {
    async getAllPosts() {
        const post = await dbContext.Posts.find()
            .populate('creator', 'name picture')
        return post
    }

    async createPost(postData) {
        const post = await dbContext.Posts.create(postData)
        await post.populate('creator', 'name picture')

        return post
    }


}

export const postsService = new PostsService()