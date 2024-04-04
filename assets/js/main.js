
const offSet = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`;


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="name">${pokemon.name}</span>
            <span class="number">#001</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonsList = document.getElementById('pokemonsList');


pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))

    const newHtml = newList.join('');

    pokemonsList.innerHTML += newHtml;

})


    

    
