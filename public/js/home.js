
const showDogImage = function(imageUrl) {
    let image = $(
        '<img>'
    ).prop('src', imageUrl).addClass('img-fluid')

    $('#dog-img').append(image)
}

const showList = function(cryptoList, itemProperty, target) {
    let cryptoHtmlList = $('<ul>').addClass('list-group')
    let listItem

    for(item of cryptoList) {
        listItem = $(
            '<li>'
        ).addClass(
            'list-group-item'
        ).text(item[itemProperty])
        cryptoHtmlList.append(listItem)
    }

    $(target).append(cryptoHtmlList)
}

$.getJSON(
    'https://dog.ceo/api/breeds/image/random',
    function(data) {
        showDogImage(data.message)
})

$.getJSON(
    'https://nova.bitcambio.com.br/api/v3/public/getassets',
    function(data) {
        showList(data.result, 'AssetLong', '#crypto-list')
})

$.getJSON(
    'https://api.coincap.io/v2/assets',
    function(data) {
        console.log(data)
        showList(data.data, 'id', '#realcrypto-list')
    }
)
