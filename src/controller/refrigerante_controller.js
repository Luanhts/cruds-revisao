const Refri = require("../models/refrigerante_model")

const store = (req, res) => {
    Refri.create(req.body);

    res.json();
};

const index = (req, res) => {
    const content = Refri.find().exec();

    res.json(content);
};

const show = (req, res) => {
    const content = Refri.findById(req.params.id).exec();
    res.json(content)
}

const update = (req, res) => {
    Refri.findByIdAndUpdate(req.params.id, req.body).exec();
    req.json()
}

const destroy = (req, res) => {
    Refri.findByIdAndDelete(req.params.id).exec();
    res.json()
}

module.exports = {
    store, index, show, update, destroy
}