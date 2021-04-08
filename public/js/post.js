const postPokemon = () => {

    const newPokemon = {
        name: document.getElementById("namePokemon").value,
        type: document.getElementById("typePokemon").value
    };

    const urlApi = `http://localhost:1010/api/pokemons`;

    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newPokemon)
    }

    fetch(urlApi, options).then((response) => {
        return response.json();
    }).then((data) => {
        //responder si ha ido bien o ha ido mal
        console.log(data);

        alert(`Pokemon añadido correctamente: ${data.newPokemon.id}`);
        document.getElementById("namePokemon").value = "";
        document.getElementById("typePokemon").value = "";
    }).catch((err) => {
        console.error(err);
    });
};