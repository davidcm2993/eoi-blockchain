const { AvatarService } = require('../services/avatar')

class CardRepository {
    constructor() {}

    getCards() {
        const avatar = new AvatarService()
        return [
            {
             id: 1,
             name: 'miau',
             description: 'Un descripcion',
             price: 0.012,
             avatar: avatar.getUniqueAvatarFromName('miau')
            },
            {
             id: 2,
             name: 'Pepe',
             description: 'Description 2',
             price: 0.13,
             avatar: avatar.getUniqueAvatarFromName('pepe')
            },
            {
             id: 3,
             name: 'Senior X',
             description: 'Description 3',
             price: 0.13,
             avatar: avatar.getUniqueAvatarFromName('Senior X')
            },
            {
             id: 4,
             name: 'Superman',
             description: 'Description 3',
             price: 0.13,
             avatar: avatar.getUniqueAvatarFromName('Superman')
            },
            {
             id: 5,
             name: 'Thanos',
             description: 'Description 3',
             price: 0.13,
             avatar: avatar.getUniqueAvatarFromName('Thanos')
            }
        ]
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
