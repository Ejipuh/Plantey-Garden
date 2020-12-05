var msg = 'Hello world.';
console.log(msg); // prints 'Hello world.' to the cmd line

var mustacheExpress = require('mustache-express');
 
// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
 
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');