export const getGif = async ( category ) => {

    let url = `https://api.giphy.com/v1/gifs/search?api_key=AvIv2xqIE2H8B2j1tCMnEpYx0KFJDHu9&q=${category}&limit=5`
    const response = await fetch(url)
    let { data } = await response.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}