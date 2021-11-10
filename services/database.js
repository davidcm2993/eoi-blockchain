const fs = require('fs')

class DatabaseService {
    DB_FILE_PATH = __dirname + '/../.db.json'

    constructor() {}

    // Crea el archivo de la BD
    init() {
        return fs.writeFileSync(this.DB_FILE_PATH, '{}')  // JSON
    }

    // Mira si la BD existe
    exists() {
        return fs.existsSync(this.DB_FILE_PATH)
    }

    // Guarda los datos en la clave key
    store(key, data) {
        const dbData = JSON.parse(fs.readFileSync(this.DB_FILE_PATH))
        let newData = { ...dbData}

        newData[key] = data
        const jsonData = JSON.stringify(newData)

        fs.writeFileSync(this.DB_FILE_PATH, jsonData)

        return newData
    }

    // TODO storeOne(key, instance)
    // Dado una clave ("cards") y un objeto, guarda el objeto en la lista
    // ("cards")

    // Toma los datos basado en esta clave
    get(key) {
        const dbData = JSON.parse(fs.readFileSync(this.DB_FILE_PATH))
        return dbData[key]
    }
}

module.exports = {
    DatabaseService
}
