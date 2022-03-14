// @ts-nocheck
const BMI=require("../src/1-BMI");

describe("calculateBMI",()=>{
    var BVAdata=[
        [1,2,"20000.00"],
        [4,5,"3125.00"],
        [4,6,"3750.00"],
        [0,89,"Infinity"],
        [-17,-35,"Please provide a valid height"],
        [65,-12,"Please provide a valid weight"],
        [-78,24,"Please provide a valid height"],
        [89,0,"0.00"],
        [,,"Please provide a valid height"],
        ["","", "Please provide a valid height"]
    ]
    describe.each(BVAdata)('BVA: calculateBMI(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${BMI.calculateBMI(a,b)}`,()=>{
            expect(BMI.calculateBMI(a,b)).toBe(expected);
        });
    });

});