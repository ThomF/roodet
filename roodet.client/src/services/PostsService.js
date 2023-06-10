import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Post } from "../models/Post.js"

class PostsService {
    async getAllPosts() {
        const res = await api.get('api/posts')
        AppState.post = res.data.map(p => new Post(p))
        logger.log(AppState.post)
    }
}
export const postsService = new PostsService()