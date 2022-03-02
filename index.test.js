const characterCount = require('./index.js');

test('string lenght is less than or equal to 10', () => {
    expect(characterCount('Microverse')).toBeLessThanOrEqual(10);
})

test('string lenght greater than or equal to 1', () => {
    expect(characterCount('Microverse')).toBeGreaterThanOrEqual(1);
})


test('Character count is', () => {
    expect(characterCount('Microverse')).toBe(10);
});

