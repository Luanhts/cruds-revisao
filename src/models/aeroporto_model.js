const db = require("../db")

const Schema = db.Schema;

const aeroportoSchema = new Schema({
    nome: {
        type: String, // Schema.types.String ou assim
        required: true
    },
    endereco: {
        type: Number,
        required: true
    }
})

const Aeroporto = db.model("Aeroporto", aeroportoSchema)

module.exports = Aeroporto