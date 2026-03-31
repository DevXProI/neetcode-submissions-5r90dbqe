class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(!(s.length <= t.length)) {
            return false;
        }

        let j = 0;
        let i = 0;
        let isSubsequence = true;

        for(i; i < s.length; i++) {
            isSubsequence = false;
            // console.log("check: ", i, j);
            for(j; j < t.length; j++) {
                if(s[i] === t[j]) {
                    j++;
                    isSubsequence = true;
                    break;
                }
                isSubsequence = false;
            }

            if(!isSubsequence) {
                break;
            }
        }

        return isSubsequence;
    }
}
