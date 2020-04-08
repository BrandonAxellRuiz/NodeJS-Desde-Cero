const http = require('http');

http.createServer(( req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }
    res.write( JSON.stringify(salida) );
    res.end();
})
.listen(3000);

console.log("escuchando el puerto 3000");