let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b

//cypress test

describe ('unit testing of dummy app', () => {

    context ('Math with positive numbers', () => {

        it('add test',() =>{
            expect(add(2,2)).to.eq(4);
        })

        it('substract test',() =>{
            expect(subtract(4,2)).to.eq(2);
        })

        it('divide',() =>{
            expect(divide(4,2)).to.eq(2);
        })

        it('multiply',() =>{
            expect(multiply(4,2)).to.eq(8);
        })


    })

    describe('unit test with decimal number',() =>{

        it('add with decimals',() =>{
            expect(add(2.2,2.2)).to.eq(4.4);
        })

        it('substract with decimals',() =>{
            expect(subtract(4.4,2.2)).to.eq(2.2);
        })

    })
})