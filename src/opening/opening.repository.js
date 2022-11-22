const Opening = require('./opening');

class OpeningRepository {

    constructor() {
        this.products = new Map([
            ["01", new Opening("01", "OPENING", "Ruy Lopez")],
            ["02", new Opening("02", "OPENING", "Queens Gambit")],
            ["03", new Opening("03", "OPENING", "Sicilian Defense")],
            ["04", new Opening("04", "OPENING", "French Defense")],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
}

module.exports = OpeningRepository;
