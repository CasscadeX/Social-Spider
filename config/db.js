const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectdb = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log("MongoDB connected")
    }catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectdb