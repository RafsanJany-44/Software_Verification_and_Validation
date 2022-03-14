const Sorting= require("../src/3-sorting") 

describe('bubbleSort', ()=>{ 
    var BVAdata=[ 
        [[2,1,4,3],[1,2,3,4]], 
        [[2,1,2,3],[1,2,2,3]], 
        [[2,1,2,-3,-2],[-3,-2,1,2,2]]
    ] 
    describe.each(BVAdata)('BVA: bubbleSort(%a), Expected: %a',(arr, expected)=>{ 
        test(`returns ${Sorting.bubbleSort(arr)}`, ()=>{ 
            expect(Sorting.bubbleSort(arr)).toEqual(expected); 
        }); 
    }); 
})