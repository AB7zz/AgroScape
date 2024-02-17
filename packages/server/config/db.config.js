import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const username = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

const Connection = async () => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.jy7pzib.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL)
        console.log('Database connected successfully')
    } catch (error){
        console.log('Error 2: ', error.message)
    }
}

export default Connection