const suma = require('./app');

test('Suma de 2 + 3 es igua a 5', 
    () => { expect(suma(2,3)).toBe(5) });