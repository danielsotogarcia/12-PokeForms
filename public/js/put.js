const searchPokemon = () => {

    const idPokemon = document.getElementById("idPokemonSearch").value;
    const urlApi = `http://localhost:1010/api/onepokemon?id=${idPokemon}`;

    fetch(urlApi).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById("idPokemon").value = data.pokemon.id;
        document.getElementById("namePokemon").value = data.pokemon.name;
        document.getElementById("typePokemon").value = data.pokemon.type;
    }).catch((err) => {
        console.error(err);
    })
}

const putPokemon = () => {

    const idPokemon = document.getElementById("idPokemon").value;
    const urlApi = `http://localhost:1010/api/pokemons/${idPokemon}`

    const putPokemon = {
        name: document.getElementById("namePokemon").value,
        type: document.getElementById("typePokemon").value
    }

    const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(putPokemon)
    }

    fetch(urlApi, options).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            alert("pokemon actualizado");
        })
        .catch((err) => {
            console.error(err);
        })

}