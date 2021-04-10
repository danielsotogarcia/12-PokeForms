const getAll = () => {

    const URI_HEROKU = "https://pokeapi-dsg.herokuapp.com/";
    const urlApi = `${URI_HEROKU}/api/pokemons`;

    fetch(urlApi).then((response) => {
        return response.json();
    }).then((data) => {

        const ulPokemons = document.getElementById("ulPokemons"); //conseguimos el ul
        ulPokemons.innerHTML = ""; //limpiamos el elemento ul

        data.pokemons.forEach(pokemon => {
            const li = document.createElement("li"); //creamos el li
            li.appendChild(document.createTextNode(pokemon.name)); //ponemos el name
            li.className = "list-group-item list-group-item-action"; // añadimos clases
            ulPokemons.appendChild(li); // añadimos li al ul
        });

    }).catch((err) => {
        console.error(err);
    });


    cookies();

};

const cookies = () => {

    const newPokemon = {
        name: "algo",
        type: "type"
    };

    const urlApi = `http://localhost:1010/api/cookie`;

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
    }).catch((err) => {
        console.error(err);
    });
};


getAll();