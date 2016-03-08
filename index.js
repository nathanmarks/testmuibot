
module.exports = sayHello;

function sayHello (name) {
  name = name || 'World';
  return `Hello ${name}!`;
}