$('.delete-card-item').click(function() {
    console.log($(this).data())
    const cardId = $(this).data('card-id')
    $('#delete-card-button').prop('href', `/delete_card/${cardId}`)
})

$('#create-card-button').click(function() {
    console.log('Click')
    const name = $('input[name="name"]').val()
    const description = $('input[name="description"]').val()
    const price = $('input[name="price"]').val()

    // TODO Cuando estos valores sean vacios,
    // Mostramos un mensaje de error y paramos el click
    // Tener deshabilitado, y habilitarlo solo cuando hayamos metido
    // todos los valores

    // Cuando se le de a crear una vez, lo deshabilitamos para que no se
    // le de dos veces
})

$('input[name="name"]').change(function() {
    const nameValue = $(this).val()

    if (nameValue) {
        $('#create-card-button').prop('disabled', false).addClass('btn-primary')
    } else {
        $('#create-card-button').prop('disabled', 'disabled').removeClass('btn-primary')
    }
})


// TODO AL hacer click en una carta quiero ver un console.log en la Consola
// Posteriormente quiero ver el mensaje de success que diga "Has clicado la carta con id: XXXXXXXXXX"
