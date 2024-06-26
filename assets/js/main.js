
const pokemonsList = document.getElementById('pokemonsList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords =  151;
const limit = 10;
let offset = 0;





function loadPokemonItens (offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.number}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>

                    <img src="${pokemon.photo}">
                </div>
            </li>
        `).join('')

        pokemonsList.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset += limit
    const qtdRecords = offset + limit;

    if (qtdRecords >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
       loadPokemonItens(offset, limit)
    }
     
})



    

    
