// @ts-nocheck
const sorting=require("../src/3-sorting");


describe("bubbleSort",()=>{
    var BVAdata=[
        [[1,2,3],[2,3,4]],
        [[1,2,3,5,6],[5,62,3,4]],
        [[1,2,3,4,5],[7,8,2,3,4]],
        [[1,2,3],[2,3,4]]
    ]
    describe.each(BVAdata)('BVA: bubbleSort(%i), Expected: %i',(a,expected)=>{
        test(`returns ${sorting.bubbleSort(a)}`,()=>{
            expect(sorting.bubbleSort(a)).toEqual(expected);
        });
    });


});