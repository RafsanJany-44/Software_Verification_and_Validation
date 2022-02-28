const calculator=require("../src/advanced");

describe("Pow",()=>{
    var BVAdata=[
        [3,2,9],
        [11,8,214358881],
        [4,2,16]
    ]
    describe.each(BVAdata)('BVA: Pow(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${calculator.Pow(a,b)}`,()=>{
            expect(calculator.Pow(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,0],
        [-17,-35,-8.595828691938621e-44],
        [65,-12,1.758084399840934e-22],
        [-78,24,2.5719970407685146e+45]
    ]
    describe.each(DTdata)('DT: Pow(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${calculator.Pow(a,b)}`,()=>{
            expect(calculator.Pow(a,b)).toBe(expected);
        });
    });

});


describe("Modulo",()=>{
    var BVAdata=[
        [2,2,0],
        [2,5,2],
        [4,2,0]
    ]
    describe.each(BVAdata)('BVA: Modulo(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${calculator.Modulo(a,b)}`,()=>{
            expect(calculator.Modulo(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,0],
        [-17,-35,-17],
        [65,-12,5],
        [-78,24,-6]
    ]
    describe.each(DTdata)('DT: Modulo(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${calculator.Modulo(a,b)}`,()=>{
            expect(calculator.Modulo(a,b)).toBe(expected);
        });
    });

});