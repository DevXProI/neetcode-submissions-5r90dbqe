class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frequecy = {};
        for(let i of nums) {
            
            if(frequecy[i]) {
                return true;
            }
            frequecy[i] = 1;
        }
        return false;
    }
}
