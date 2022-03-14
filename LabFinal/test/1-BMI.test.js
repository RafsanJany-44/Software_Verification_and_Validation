const BMI=require("../src/1-BMI");

describe("calculateBMI",()=>{
    var BVAdata=[
        [1,2,3],
        [4,5,9],
        [4,6,10]
    ]
    describe.each(BVAdata)('BVA: calculateBMI(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${BMI.calculateBMI(a,b)}`,()=>{
            expect(BMI.calculateBMI(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,89],
        [-17,-35,-52],
        [65,-12,53],
        [-78,24,-54]
    ]
    describe.each(DTdata)('DT: calculateBMI(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${BMI.calculateBMI(a,b)}`,()=>{
            expect(BMI.calculateBMI(a,b)).toBe(expected);
        });
    });

});