// @ts-nocheck
const converter=require("../src/2-converter");


describe("WeightConverter",()=>{
    var BVAdata=[
        [1,2,"wrong input"],
        ["ounces",5,["0.31 pounds", "0.00 tons"]],
        [4,"ounces","wrong input"],
        ["ounces",10,["0.63 pounds", "0.00 tons"]],
        ["ounces",3,["0.19 pounds", "0.00 tons"]],
        ['','',"wrong input"]

    ]
    describe.each(BVAdata)('BVA: WeightConverter(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${converter.WeightConverter(a,b)}`,()=>{
            expect(converter.WeightConverter(a,b)).toEqual(expected);
        });
    });

});