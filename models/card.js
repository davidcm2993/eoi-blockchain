const { AvatarService } = require('../services/avatar')
const { DatabaseService } = require('../services/database')

class CardRepository {
    constructor() {}

    getCards() {
        const database = new DatabaseService()
        return database.get('cards')
    }
}


class Card {
    constructor() {
        console.log('Cargando Card')
    }
}


module.exports = {
    Card, CardRepository
}
