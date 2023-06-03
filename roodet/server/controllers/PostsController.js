import BaseController from "../utils/BaseController.js"
import { Auth0Provider } from "@bcwdev/auth0provider"
import { postsService } from "../services/PostsService.js"

export class PostsController extends BaseController {
    constructor() {
        super('api/posts')
        this.router
            .get('', this.getAllPosts)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPost)

    }

    async getAllPosts(req, res, next) {
        try {
            const post = await postsService.getAllPosts()
            res.send(post)
        } catch (error) {
            next(error)
        }
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