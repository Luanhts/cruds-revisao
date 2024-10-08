const Moto = require("../models/caneta_model")

const store = (req, res) => {
    Moto.create(req.body);

    res.json();
};

const index = (req, res) => {
    const content = Moto.find().exec();

    res.json(content);
};

const show = (req, res) => {
    const content = Moto.findById(req.params.id).exec();
    res.json(content)
}

const update = (req, res) => {
    Moto.findByIdAndUpdate(req.params.id, req.body).exec();
    req.json()
}

const destroy = (req, res) => {
    Moto.findByIdAndDelete(req.params.id).exec();
    res.json()
}

module.exports = {
    store, index, show, update, destroy
}