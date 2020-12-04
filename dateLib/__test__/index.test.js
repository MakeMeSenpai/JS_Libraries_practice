// this is simply a deconstuctor, and can be done anywheres
// const { round } = Math
// console.log(round.round(1.35))

// So we use it here to import our functions
// module.exports.D = D
const { D } = require('../index');
// Test('test if ', () => {
//     expect().toBe();
// })
//maybe numbers have to be strings
// The Corner Aniversary 
const d = new D('09/25/2013 11:30:15 GMT-0800');
// console.log()
test('test if sets work', () => {
    expect(d.year).toBe(2013);
    expect(d.monthOfYear).toBe("September");
    expect(d.dayOfWeek).toBe("Wednesday");
    expect(d.hours).toBe(11)
    expect(d.mins).toBe(30)
    expect(d.secs).toBe(15) // 05 => 5 // 10 => 1
});

test('test if inputs are formated', () => {
    expect(d.format()).toBe('2013 9 25');
    expect(d.format('y/m/d')).toBe('2013/9/25');
    expect(d.format('h:i:s')).toBe('11:30:15');
    expect(d.format('H:I:S')).toBe('11:30:15');
    expect(d.format('M-D-Y h:I:s')).toBe('9-25-2013 11:30:15');
});

test('test if difference is correct', () => {
    // today
    expect(d.when('09/25/2013')).toBe('today') 
    // black ops 2
    expect(d.when('2025')).toBe('11 years 3 months and 6 days from now')
    // senior year high school
    expect(d.when('2018/10/25')).toBe('5 years and 1 month from now')
    // started make school
    expect(d.when('2019/08/18')).toBe('6 years 1 month and 7 days from now')
    // birthday
    expect(d.when('2001')).toBe('13 years 3 months and 6 days ago')
})
