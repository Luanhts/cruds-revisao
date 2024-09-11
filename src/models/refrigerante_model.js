const db = require("../db")

const Schema = db.Schema;

const refriSchema = new Schema({
    porcentagem_suco: {
        type: Number,
        required: true
    },
    kcal200ml: {
        type: Number,
        required: true
    },
    sabor: {
        type: String,
        require: true
    },
    tamanhoMl: {
        type: Number,
        required: true
    }
})

const Refrigerante = db.model("Refrigerante", refriSchema)

module.exports = Refrigerante