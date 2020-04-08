const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials( __dirname + '/views/parciales/' );

app.use( express.static( __dirname+'/public/') );



//hbs engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre : 'brandon',
        anio: new Date().getFullYear()
    });
});
``

app.listen(3000, ( ) => {
    console.log('Escuchando peticiones en el puerto', 3000)
});