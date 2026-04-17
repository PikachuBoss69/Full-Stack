const mongoose = require('mongoose');

async function ConnectDb() {
    try {
        const conn = await mongoose.connect(
            'mongodb://pikachuBoss:Anujnegi%407637@ac-rorrlam-shard-00-00.5byys7q.mongodb.net:27017,ac-rorrlam-shard-00-01.5byys7q.mongodb.net:27017,ac-rorrlam-shard-00-02.5byys7q.mongodb.net:27017/?ssl=true&replicaSet=atlas-10hm9t-shard-0&authSource=admin&appName=cluster0'
        );

        console.log('✅ MongoDB Connected:');
    } catch (err) {
        console.error("❌ DB Connection Error:");
        console.error(err); // full error, not just message
        process.exit(1);
    }
}
module.exports = ConnectDb;