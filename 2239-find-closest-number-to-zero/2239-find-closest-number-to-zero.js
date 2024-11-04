/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    if(nums.length === 0) return 0;
    
    let closest = nums[0];
    for(i = 1; i<nums.length; i++){
        const num = nums[i];
        if(Math.abs(num) < Math.abs(closest) || (Math.abs(num) === Math.abs(closest) & num > closest)){
            closest = num;
        }
    }
    return closest;
};