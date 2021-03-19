require('dotenv').config()
const mongoose = require('mongoose');


module.exports = () => {
    const connect = () => {
        mongoose.connect(process.env.DATABASE_URL, {
                useCreateIndex: true,
                useFindAndModify: false,
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            // .then(result => {
            //     console.log('Database connected !!')
            // })
            // .catch(err => console.log(err));
        const db = mongoose.connection
        db.on('error', error => console.error(error))
        db.once('open', () => console.log('connected to Mongoose !!'))
    }
    connect()
}