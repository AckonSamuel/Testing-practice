const modules = require('./index.js');



test('string lenght is less than or equal to 10', () => {
    expect(modules.characterCount('Microverse')).toBeLessThanOrEqual(10);
})

test('string lenght greater than or equal to 1', () => {
    expect(modules.characterCount('Microverse')).toBeGreaterThanOrEqual(1);
})


test('Character count is', () => {
    expect(modules.characterCount('Microverse')).toBe(10);
});

test('string is reversed', () => {
    expect(modules.reverseStr("Amen")).toBe("nemA");
})