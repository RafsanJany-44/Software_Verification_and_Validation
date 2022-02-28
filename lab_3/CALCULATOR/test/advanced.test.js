const calculator=require("../src/advanced");

describe("Pow",()=>{
    var BVAdata=[
        [3,2,1],
        [11,8,4],
        [4,2,16]
    ]
    describe.each(BVAdata)('BVA: Pow(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${calculator.Pow(a,b)}`,()=>{
            expect(calculator.Pow(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,89],
        [-17,-35,-52],
        [65,-12,53],
        [-78,24,-54]
    ]
    describe.each(DTdata)('DT: Pow(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${calculator.Pow(a,b)}`,()=>{
            expect(calculator.Pow(a,b)).toBe(expected);
        });
    });

});


describe("Modulo",()=>{
    var BVAdata=[
        [2,2,4],
        [2,5,25],
        [4,2,0]
    ]
    describe.each(BVAdata)('BVA: Modulo(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${calculator.Modulo(a,b)}`,()=>{
            expect(calculator.Modulo(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,0],
        [-17,-35,17],
        [65,-12,5],
        [-78,24,-6]
    ]
    describe.each(DTdata)('DT: Modulo(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${calculator.Modulo(a,b)}`,()=>{
            expect(calculator.Modulo(a,b)).toBe(expected);
        });
    });

});