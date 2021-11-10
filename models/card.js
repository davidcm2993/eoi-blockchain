class CardRepository {
    constructor() {}

    getCards() {
        return [
            {
             id: 1,
             name: 'miau',
             description: 'Un descripcion',
             price: 0.012,
             avatar: ''
            },
            {
             id: 2,
             name: 'Pepe',
             description: 'Description 2',
             price: 0.13,
             avatar: ''
            },
            {
             id: 3,
             name: 'Senior X',
             description: 'Description 3',
             price: 0.13,
             avatar: ''
            },
            {
             id: 4,
             name: 'Superman',
             description: 'Description 3',
             price: 0.13,
             avatar: ''
            },
            {
             id: 5,
             name: 'Thanos',
             description: 'Description 3',
             price: 0.13,
             avatar: ''
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
