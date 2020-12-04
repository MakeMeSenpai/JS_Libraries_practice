// requires bable set up and we are too lazy for that
// import { upperFirst, upperFirstWord, upperEveryOther, removeSpace, removeExtraSpace, kabobCase, snakeCase, camelCase, shift } from '../index';

const StringLib = require('../index');
const str = "hello world!"
const beta = "abcdefg"
const alpha = "a   b  c  d  e f      g"

test('Sanity check', () => {
	// this test passes
})

test('test if first uppercase', () => {
    expect(StringLib.upperFirst(str)).toBe("Hello world!");
    expect(StringLib.upperFirst(beta)).toBe("Abcdefg");
    try {
        StringLib.upperFirst("*asdf")
    } catch (error) {
        "cannot capitalize special characters"
    }
});

test('test if first letters uppercase', () => {
    expect(StringLib.upperFirstWord(str)).toBe("Hello World!");
    expect(StringLib.upperFirstWord(beta)).toBe("Abcdefg");
    expect(StringLib.upperFirstWord(alpha)).toBe("A   B  C  D  E F      G");
});

test('test if every other uppercase', () => {
    expect(StringLib.upperEveryOther(str)).toBe("HeLlO WoRlD!");
    expect(StringLib.upperEveryOther(beta)).toBe("AbCdEfG");
});

test('test if space removed', () => {
    expect(StringLib.removeSpace(str)).toBe("helloworld!");
    expect(StringLib.removeSpace(alpha)).toBe("abcdefg");
});

test('test if extra space removed', () => {
    expect(StringLib.removeExtraSpace(str)).toBe("hello world!");
    expect(StringLib.removeExtraSpace(alpha)).toBe("a b c d e f g");
});

test('test if we kabob', () => {
    expect(StringLib.kabobCase(str)).toBe("hello-world!");
    expect(StringLib.kabobCase(alpha)).toBe("a-b-c-d-e-f-g");
});

test('test if we snake', () => {
    expect(StringLib.snakeCase(str)).toBe("hello_world!");
    expect(StringLib.snakeCase(alpha)).toBe("a_b_c_d_e_f_g");
});

test('test if we camel', () => {
    expect(StringLib.camelCase(str)).toBe("helloWorld!");
    expect(StringLib.camelCase(alpha)).toBe("aBCDEFG");
});

test('test if shifts one', () => {
    expect(StringLib.shift(str)).toBe("ello world!h");
    expect(StringLib.shift(beta)).toBe("bcdefga");
    expect(StringLib.shift(alpha)).toBe("   b  c  d  e f      ga");
});
