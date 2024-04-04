

const pokeApi = {}

pokeApi.getPokemons = (limit = 10, offSet = 0) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}