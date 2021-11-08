const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
const port = 3000

// Las vistas de mi web
// GET PUT POST DELETE - API
// GET cuando pedimos una web
// POST Cuando enviamos un form (Login, Registro)
app.get('/', function(request, response) {
    response.render('index')
})

app.listen(port, function() {
    console.log('Servidor iniciado')
})
