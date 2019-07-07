import * as mongoose from 'mongoose';

const dbUrl = "mongodb+srv://marvelDbUser:c0l0mb!@n0@marvel-sjdft.mongodb.net/test?retryWrites=true&w=majority";
const db = mongoose.connect(dbUrl, { useNewUrlParser: true });

export default db;