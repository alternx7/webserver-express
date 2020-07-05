const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

//Esta línea es para generar un middleware o sea una instrucción que se ejecuta
//siempre sin importar la url que se pida. Crea una carpeta con contenido público
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




//Aquí lo que se hace es definir que todas las peticiones de tipo GET
//que vengan hacia la dirección '/' se van a resolver por esta función
//Ejemplo si mi servidor se llama 'myserver.com' todas las peticiones del tipo
//'myserver.com/' van a caer en esta función, pero si la petición es tipo
//'myserver.com/algomas' tons esas irán a otra

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'xAvier'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});