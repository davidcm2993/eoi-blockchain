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
    console.log('Cambio')
    console.log($(this).val())
    $('#create-card-button').prop('disabled', false)
})
