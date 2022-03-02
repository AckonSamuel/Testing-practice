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
});

describe('calculator', () => {

    const act = new modules.calculator;
    test('adds accurately', () => {
        expect(act.add(5, 2)).toBe(7);
    });

    test('subtracts accurately', () => {
        expect(act.subtract(5, 2)).toBe(3);
    });

    test('multiplies accurately', () => {
        expect(act.multiply(5, 2)).toBe(10);
    });

    test('divides accurately', () => {
        expect(act.divide(10, 2)).toBe(5);
    });

});