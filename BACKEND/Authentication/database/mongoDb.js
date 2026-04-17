const mongoose = require('mongoose')
require('dotenv').config();

async function ConnectDb() {
    try {
        await mongoose.connect(
            process.env.MONGO_URL
        );

        console.log('✅ MongoDB Connected:');
    } catch (err) {
        console.error("❌ DB Connection Error:");
        console.error(err); // full error, not just message
        process.exit(1);
    }
}

module.exports = ConnectDb;