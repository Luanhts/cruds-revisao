const db = require("../db")

const Schema = db.Schema;

const canetaSchema = new Schema({
    cor: {
        type: String, // Schema.types.String ou assim
        required: true
    },
    ehBic: {
        type: Boolean,
        required: true
    }
})

const Caneta = db.model("Caneta", canetaSchema)

module.exports = Caneta