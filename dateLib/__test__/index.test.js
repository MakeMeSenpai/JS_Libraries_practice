const { D } = require('../index');
// Test('test if ', () => {
//     expect().toBe();
// })

// The Corner Aniversary 
let d = new D('2013/09/25 11:30:00 PTS');

setterTest('test if sets work', () => {
    expect(d.year).toBe(2013);
    expect(d.month).toBe("September");
    expect(d.day).toBe(25);
    expect(d.hours).toBe(11)
    expect(d.mins).toBe(30)
    expect(d.secs).toBe(00)
});

formatedTest('test if inputs are formated', () => {
    expect(d.format()).toBe(`${this.year} ${this.month} ${this.day}`);
    expect(d.format()).toBe(`${this.year}/${this.month}/${this.day}`);
    expect(d.format()).toBe(`${this.hours}:${this.mins}:${this.secs}`);
    expect(d.format()).toBe(`${this.hours}:${this.mins}:${this.secs}`);
    expect(d.format()).toBe(`${this.year}-${this.month}-${this.day} ${this.hours}:${this.mins}:${this.secs}`);
});

// whenTest('test if difference is correct', () => {
//     d = new D('2025') // black ops 2
//     console.log(d.when())
//     d = new D('2018/10/25') // last break up
//     console.log(d.when())
//     d = new D('2019/08/18') // starting make school
//     console.log(d.when()) 
//     d = new D(2019, 0, 2, 3, 4, 5)
//     console.log(d.when()) // 6 months ago
//     d = new D(2019, 9, 2, 3, 4, 5)
//     console.log(d.when()) // 3 months from now
//     d = new D(2024, 9, 2, 3, 4, 5)
//     console.log(d.when()) // 5 years from now
//     d = new D(2019, 6, 30, 3, 4, 5)
//     console.log(d.when()) // 3 days from now
//     d = new D()
//     console.log(d.when()) // today
// })
