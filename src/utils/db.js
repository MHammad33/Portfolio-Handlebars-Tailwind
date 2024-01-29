const mongoose = require("mongoose");
const URI = "mongodb+srv://hammadafzal1111:eExHHZ1ygLw6dDzg@cluster0.dfk59ra.mongodb.net/?retryWrites=true&w=majority";


const dbConnect = async () => {
    try {
        await mongoose.connect(URI, {
            dbName: "portfolio-info"
        });
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database Connection failed...");
        process.exit(0);
    }
}

module.exports = dbConnect;