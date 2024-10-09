/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    let c;
    for(let i=0; i<nums.length; i++){
        let cnum = nums[i];
        if(obj[cnum]){
            obj[cnum]++;
        }else{
            obj[cnum] = 1;
        }
    }
    c = Object.values(obj).some((val,idx,c) => val > 1) ? true : false;
    return c;
};