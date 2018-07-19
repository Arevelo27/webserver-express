const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Cintent-Type': 'application/json' });

        let salida = {
            nombre: 'Andres Revelo',
            edad: 27,
            url: req.url
        }
        res.write(JSON.stringify(salida))
            // res.write('Hola mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');