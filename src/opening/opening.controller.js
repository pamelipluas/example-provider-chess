const OpeningRepository = require("./opening.repository");

const repository = new OpeningRepository();

exports.getAll = async (req, res) => {
    res.send(await repository.fetchAll())
};
exports.getById = async (req, res) => {
    const opening = await repository.getById(req.params.id);
    opening ? res.send(opening) : res.status(404).send({message: "Opening not found"})
};

exports.repository = repository;