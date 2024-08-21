const mongoose = require('mongoose')

const connectDB = (url) => {
	mongoose.set("strictQuery", false);
	mongoose.connect(url).then(() => {
		console.log('Successfully connected to database');
	}).catch((error) => {
		console.error(error);
	})
}

module.exports = connectDB;