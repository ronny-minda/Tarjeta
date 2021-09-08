const express = require('express');
const app = express();
const path = require('path');

// configuracion
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// funciones que se ejecutan antes de las rutas(middlewares)


// rutas del servidor
app.use(require('./router/index'));

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// escuhando al servidor
app.listen(app.set('port'), () => {
    console.log('Escuchando en el puerto', app.set('port'))
})