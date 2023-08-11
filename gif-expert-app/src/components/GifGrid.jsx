const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=bPXNdwmpklw5fV9bJXaglusPTaOcBFQk&q=${category}&limit=20`;
    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(data);

    return gifs;

};

export const GifGrid = ({category, key}) => {
    getGifs(category);

    return (

        <>
            <h3>{category}</h3>
            {
                // gifs.map( gif => (
                //     <p>{ gif }</p>
                // ))
            }

        </>

    )
}
