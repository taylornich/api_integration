
const pokemonId = "143";

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        displayPokemonDetails(data);
    })
    .catch(error => {
        document.getElementById('pokemonDetails').innerHTML = `<p class="text-danger">Error fetching Pokémon details.</p>`;
    });

function displayPokemonDetails(pokemon) {
    const pokemonDetails = document.getElementById('pokemonDetails');
    const types = pokemon.types.map(type => type.type.name).join(', ');
    const abilities = pokemon.abilities.map(ability => ability.ability.name).join(', ');
    const stats = pokemon.stats.map(stat => `
        <div class="stats-item">
            <strong>${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</strong> ${stat.base_stat}
        </div>`).join('');


    pokemonDetails.innerHTML = `
        <div class="card">
            <img src="${pokemon.sprites.front_default}" class="card-img" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                <p class="card-text"><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                <p class="card-text"><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <h6>Stats:</h6>
                <div class="stats-list">
                    ${stats}
                </div>
                <p class="card-text"><strong>Height:</strong> ${pokemon.height} decimeters</p>
                <p class="card-text"><strong>Weight:</strong> ${pokemon.weight} hectograms</p>
            </div>
        </div>
`;
}