$.getJSON(
    'https://dog.ceo/api/breeds/image/random',
    function(data) {
        console.log(data)
        console.log(data.message)
})
