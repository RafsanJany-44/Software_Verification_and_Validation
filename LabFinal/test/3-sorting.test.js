const sorting=require("../src/3-sorting");


describe("bubbleSort",()=>{
    var BVAdata=[
        [[1,2,3],[1,2,3]],
        [[1,2,3,5,6],[1,2,3,5,6]],
        [[1,2,3,4,5],[1,2,3,4,5]],
        [[1,2,3],[1,2,3]]
    ]
    describe.each(BVAdata)('BVA: bubbleSort(%a), Expected: %a',(a,expected)=>{
        test(`returns ${sorting.bubbleSort(a)}`,()=>{
            expect(sorting.bubbleSort(a)).toEqual(expected);
        });
    });


});