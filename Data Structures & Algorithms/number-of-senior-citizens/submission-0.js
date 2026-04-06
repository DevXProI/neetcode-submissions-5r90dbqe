class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let i = 0, count = 0;
        while(i < details.length) {
            if(Number(details[i].substr(11, 2)) && Number(details[i].substr(11, 2)) > 60) {
                count++;
            }
            i++;
        }
        return count;
    }
}
