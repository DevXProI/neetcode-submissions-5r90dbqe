class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const frequency = {};
        for(let i = 0; i < nums.length; i++) {
            if(frequency[nums[i]]) {
                return true;
            }
            frequency[nums[i]] = "First Time"
        }
        return false
    }
}
