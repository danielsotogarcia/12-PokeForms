const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json()); // necesario para parseo de string json
app.use(bodyParser.urlencoded({ extended: true })); //Decodificamos la informacion del body
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use(express.static(__dirname + '/public/html', { extensions: ['html'] }));


app.post("/server/cookie", (request, response) => {

    cookieParser.JSONCookie({ name: "algo" });

    return response.cookie("name", "asdas").status(200).send({
        success: true,
        url: "/cookie",
        method: "POST",
        message: "cookie guardada",
        data: request.body
    });
});

app.listen(1012, () => {
    console.log(`Servidor iniciado en el puerto: ${1012}`);
});