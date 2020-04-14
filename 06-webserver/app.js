const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const anio = new Date().getFullYear();


app.use(express.static(__dirname + '/public/'));

//hbs engine
app.set('view engine', 'hbs');


hbs.registerPartials( __dirname + '/views/parciales/' );


app.get('/', (req, res) => {
    res.render('home', {
        nombre : 'brandon',
        anio 
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'brandon',
        anio 
    });
});


app.listen(3000, ( ) => {
    console.log('Escuchando peticiones en el puerto', 3000)
});