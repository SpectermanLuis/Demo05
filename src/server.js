const express = require("express");
const path = require("path");

const server = express();
const PORT = 3050;
const HOST = "localhost";

// En este método si importa el lugar en el que se ha declarado.
// Se debe colocar arriba de todas las rutas. Lo podes probar en
// tu navegador: http://localhost:3000/img/argentina_programa_4.png
 server.use('/public', express.static(path.join(__dirname, "public")));
 
server.get('/', (request, response) => {
    response.status(200).send("Esta es la ruta principal del backend");
});

server.get('/cursos', (request, response) => {
    response.status(200).send("Esta es la ruta cursos");
});

server.get('/contacto', (request, response) => {
    response.status(200).send("Esta es la ruta contacto");
});

// En este método si importa el lugar en el que se ha declarado.
// Se debe colocar debajo de todas las rutas.
server.get('*', (request, response) => {
    response.status(404).send(
        {"error": "404",
         "description": "No se encuentra la ruta o recurso solicitado."});
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));