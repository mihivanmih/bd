import db from '../db.js'
class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        //console.log(name, surname)
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const users = await db.query(`SELECT * FROM person WHERE id=${id}`)
        res.json(users.rows)
    }
    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const user = await db.query(`UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *`, [name, surname, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query(`DELETE FROM person WHERE id=${id}`)
        res.json(users.rows)
    }
}
export default new UserController()
//module.exports = new UserController()