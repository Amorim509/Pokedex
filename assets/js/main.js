
const offSet = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`;

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.order}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonsList = document.getElementById('pokemonsList');


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join('');
});


    

    
