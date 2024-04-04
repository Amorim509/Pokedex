



pokeApi.getPokemons().then((pokemonList) => {
    
    const listItems = []

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            listItems.push(convertPokemonToLi(pokemon))
        }
        console.log(listItems);
    })


    const pokemonsList = document.getElementById('pokemonsList')

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
