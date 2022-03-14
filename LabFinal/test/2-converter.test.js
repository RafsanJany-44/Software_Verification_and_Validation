const converter=require("../src/2-converter");


describe("WeightConverter",()=>{
    var BVAdata=[
        [1,2,"wrong input"],
        ["ounces",5,9],
        [4,"ounces","wrong input"],
        ["ounces",10,100],
        ["ounces",3,4]

    ]
    describe.each(BVAdata)('BVA: WeightConverter(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${converter.WeightConverter(a,b)}`,()=>{
            expect(converter.WeightConverter(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,89],
        [-17,-35,-52],
        [65,-12,53],
        [-78,24,-54]
    ]
    describe.each(DTdata)('DT: WeightConverter(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${converter.WeightConverter(a,b)}`,()=>{
            expect(converter.WeightConverter(a,b)).toBe(expected);
        });
    });

});