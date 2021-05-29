const getGifs = async(category) => {
    
        const urlFetch = `http://api.giphy.com/v1/gifs/search?api_key=7YWemLJLKJhV1Al8orCcH5q3qZ5djxU8&q=${encodeURI(category)}&limit=7`;
        const res = await fetch(urlFetch);
        const { data } = await res.json();
        const gifs = data.map(({ id, images, title }) => {
          return {
            id: id,
            title: title,
            url: images.downsized.url,
          };
        });
    
    return gifs;
}

export default getGifs