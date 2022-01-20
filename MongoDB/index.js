import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb+srv://admin:1234@cluster0.xcy6e.mongodb.net/mongoDBlocal?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        console.log("Подключились")
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({name: 'oleg', age: 21})
        
        const userPrint = await users.findOne({age:21})
        console.log(userPrint)
    } catch (e) {
        console.log(e)
    }
}

start()