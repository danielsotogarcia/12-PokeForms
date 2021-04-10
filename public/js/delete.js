const URI_HEROKU = "https://pokeapi-dsg.herokuapp.com";
const urlApi = `${URI_HEROKU}/api/pokemons`;

const getAll = () => {

    fetch(urlApi).then((response) => {
        return response.json();
    }).then((data) => {

        const ulPokemons = document.getElementById("ulPokemons"); //conseguimos el ul
        ulPokemons.innerHTML = ""; //limpiamos el elemento ul

        data.pokemons.forEach(pokemon => {
            // creamos el li
            const li = document.createElement("li"); //creamos el li
            li.innerText = pokemon.name; //ponemos el name
            li.className = "list-group-item list-group-item-action"; // añadimos clases

            //creamos el boton de borrado
            const button = document.createElement("button");
            button.type = "button";
            button.innerText = "Borrar";
            button.className = "btn btn-danger float-right";
            button.id = pokemon.id;

            // añado evento click al boton
            button.addEventListener("click", (event) => {
                deletePokemon(event.target.id); //conseguimos el id del boton
            });

            li.appendChild(button); // añadimos el boton al li
            ulPokemons.appendChild(li); // añadimos li al ul

        });

    }).catch((err) => {
        console.error(err);
    });
};

const deletePokemon = (id = 0) => {

    const deletePokemon = {
        id: id,
    };

    const opts = {
        method: "DELETE",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(deletePokemon)
    }

    fetch(urlApi, opts).then((response) => {
            console.log("POST SUCCESS");
            return response.json();
        })
        .then((data) => {
            alert("Pokemon eleminado id: " + data.deletePokemon.id);
            getAll(); // volvemos a llamar al getAll para repintar el nuevo listado
        })
        .catch((err) => {
            console.error(err);
        });
};

getAll();