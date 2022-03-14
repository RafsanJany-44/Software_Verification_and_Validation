const sorting=require("../src/3-sorting");


describe("bubbleSort",()=>{
    var BVAdata=[
        [1,2,3],
        [4,5,9],
        [4,6,10]
    ]
    describe.each(BVAdata)('BVA: bubbleSort(%i, %i), Expected: %i',(a,b,expected)=>{
        test(`returns ${sorting.bubbleSort(a,b)}`,()=>{
            expect(sorting.bubbleSort(a,b)).toBe(expected);
        });
    });

    var DTdata=[
        [0,89,89],
        [-17,-35,-52],
        [65,-12,53],
        [-78,24,-54]
    ]
    describe.each(DTdata)('DT: bubbleSort(%i, %i), Expected: %i',(a,b,expected) => {
        test(`returns ${sorting.bubbleSort(a,b)}`,()=>{
            expect(sorting.bubbleSort(a,b)).toBe(expected);
        });
    });

});