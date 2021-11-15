
const showDogImage = function(imageUrl) {
    let image = $(
        '<img>'
    ).prop('src', imageUrl).addClass('img-fluid')

    $('#dog-img').append(image)
}

const showList = function(cryptoList) {
    let cryptoHtmlList = $('<ul>')
    let listItem

    for(item of cryptoList) {
        listItem = $('<li>').text(`${item.AssetLong} (${item.SystemProtocol})`)
        cryptoHtmlList.append(listItem)
    }

    $('#crypto-list').append(cryptoHtmlList)
}

$.getJSON(
    'https://dog.ceo/api/breeds/image/random',
    function(data) {
        showDogImage(data.message)
})

$.getJSON(
    'https://nova.bitcambio.com.br/api/v3/public/getassets',
    function(data) {
        showList(data.result)
})
