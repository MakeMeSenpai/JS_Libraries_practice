const { upperFirst, upperFirstWord, upperEveryOther, removeSpace,
    removeExtraSpace, kabobCase, snakeCase, camelCase,
    shift } = require('../index.js');

const str = "hello world!"
const beta = "abcdefg"
const alpha = "a   b  c  d  e f      g"

test('Sanity check', () => {
	// this test passes
})

upperFirstTest('test if first uppercase', () => {
    expect(upperFirst(str)).toBe("Hello world!");
    expect(upperFirst(beta).toBe("Abcdefg"));
    try {
        upperFirst("*asdf")
    } catch (error) {
        "cannot capitalize special characters"
    }
});

upperFirstWordTest('test if first word uppercase', () => {
    expect(upperFirstWord(str)).toBe("Hello world!");
    expect(upperFirstWord(beta).toBe("Abcdefg"));
    expect(upperFirstWord(aplah).toBe("A   b  c  d  e f      g"));
});

upperEveryOtherTest('test if every other uppercase', () => {
    expect(upperEveryOther(str)).toBe("hElLo wOrLd!");
    expect(upperEveryOther(beta).toBe("aBcDeFg"));
});

removeSpaceTest('test if space removed', () => {
    expect(removeSpace(str)).toBe("helloworld!");
    expect(removeSpace(alpha).toBe("abcdefg"));
});

removeExtraSpaceTest('test if extra space removed', () => {
    expect(removeExtraSpace(str)).toBe("hello world!");
    expect(removeExtraSpace(alpha).toBe("a b c d e f g"));
});

kabobCaseTest('test if we kabob', () => {
    expect(kabobCase(str)).toBe("hello-world!");
    expect(kabobCase(alpha).toBe("a-b-c-d-e-f-g"));
});

snakeCaseTest('test if we snake', () => {
    expect(snakeCase(str)).toBe("hello_world!");
    expect(snakeCase(alpha).toBe("a_b_c_d_e_f_g"));
});

camelCaseTest('test if we  camel', () => {
    expect(camelCase(str)).toBe("helloWorld!");
    expect(camelCase(alpha).toBe("aBCDEFG"));
});

shiftTest('test if ', () => {
    expect(shift(str)).toBe("hello world!");
    expect(shift(beta).toBe("abcdefg"));
    expect(shift(alpha).toBe("a   b  c  d  e f      g"));
});
