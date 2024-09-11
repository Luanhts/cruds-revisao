const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/capa" // capa nome do banco

async function main() {
    await mongoose.connect(mongoDB)
}

main()
    .then(() => console.log("Deu boa"))
    .catch(err => console.log(err))

module.exports = mongoose