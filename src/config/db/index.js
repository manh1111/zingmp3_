const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/zing-mp3-dev');
        console.log('success')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect }
