class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const result = [];
        let greatest = -1;
        for(let i = arr.length - 1; i >= 0; i--) {
            result.push(greatest);
            if(arr[i] > greatest) {
                greatest = arr[i];
            }
        }

        return result.toReversed();
    }
}
