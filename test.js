const Test = require('tape');
const sayHello = require('./index');

Test('Greeting people', t => {

  t.equals(
    sayHello(),
    'Hello World!',
    'Greets people as "World" by default'
  );

  t.end();

});