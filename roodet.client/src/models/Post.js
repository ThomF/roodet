export class Post {
    constructor(data) {
        this.creatorId = data.creatorId
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.isPrivate = data.isPrivate
        this.subRood = data.subRood
    }
}