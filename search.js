document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pokemonNameOrId = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            document.getElementById('pokemonInfo').innerHTML = `<p class="text-danger">Pokémon not found. Please try again!</p>`;
        });
});

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
        <div class="card">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                <p class="card-text"><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                <p class="card-text"><strong>Height:</strong> ${pokemon.height} decimeters</p>
                <p class="card-text"><strong>Weight:</strong> ${pokemon.weight} hectograms</p>
            </div>
        </div>
    `;
}