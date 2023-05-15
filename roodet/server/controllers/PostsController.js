import BaseController from "../utils/BaseController.js"
import { Auth0Provider } from "@bcwdev/auth0provider"
import { postsService } from "../services/PostsService.js"

export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            // .get('', this.getAllPosts)
            .post('', this.createPost)
        // .use(Auth0Provider.getAuthorizedUserInfo)

    }

    async createPost(req, res, next) {
        try {
            const postData = req.body
            postData.creatorId = req.userInfo.id
            const post = await postsService.createPost(postData)
            return res.send(post)
        } catch (error) {
            next(error)
        }
    }

}