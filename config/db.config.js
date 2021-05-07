const username = "zuri_data";
const password = "EmmAnUEl";
const connectionString = `
  mongodb+srv://${username}:${password}@cluster0.e7kyq.mongodb.net/user_data?retryWrites=true&w=majority`;


module.exports = {
  url: connectionString,
};
