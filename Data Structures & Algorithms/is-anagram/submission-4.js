class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }

        const freuency = {};
        const freuency2 = {}

        for(let i = 0; i < s.length; i++) {
            if(freuency[s[i]]) {
                freuency[s[i]] = freuency[s[i]] + 1;
            } else {
                freuency[s[i]] = 1;
            }

            if(freuency2[t[i]]) {
                freuency2[t[i]] = freuency2[t[i]] + 1;
            } else {
                freuency2[t[i]] = 1;
            }
        }

        for(const key in freuency) {
            if(freuency[key] === freuency2[key]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
