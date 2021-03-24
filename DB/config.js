const mongoose = require('mongoose');


module.exports = () => {
    const connect = () => {
        mongoose.connect(process.env.DATABASE_URL, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection
            // mongoose doc / Rivas
        db.on('error', error => console.error(error)) // on === addListener 
        db.once('open', () => console.log('connected to Mongoose !!'))
    }
    connect()
}