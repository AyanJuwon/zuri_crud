const mongoose = require("mongoose");

const password = "EmmAnUEl";
const connectionString = `mongodb+srv://zuri_data:${password}@cluster0.e7kyq.mongodb.net/sampleData?retryWrites=true&w=majority`;
module.exports = () => {
    mongoose.connect(
        connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("database connected");
            }
        }
    );
}
