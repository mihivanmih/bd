import db from '../db.js'
class PostController {
    
    async CreatePost(req, res) {
        const {title, content, userId} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId])
        res.json(newPost.rows[0])
    }
    
    async getPostsByUser(req, res) {
        const posts = await db.query(`SELECT * FROM post WHERE user_id=${req.query.id}`)
        res.json(posts.rows)
    }
}

export default new PostController()