class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freuency = {};
        const freuency2 = {}

        for(let i = 0; i < s.length; i++) {
            if(freuency[s[i]]) {
                freuency[s[i]] = freuency[s[i]] + 1;
            } else {
                freuency[s[i]] = 1;
            }
        }

        for(let i = 0; i < t.length; i++) {
            if(freuency2[t[i]]) {
                freuency2[t[i]] = freuency2[t[i]] + 1;
            } else {
                freuency2[t[i]] = 1;
            }
        }

        const keys1 = Object.keys(freuency);
        const keys2 = Object.keys(freuency2)

        const iterationObj = keys1.length > keys2.length ? freuency : freuency2;

        console.log()

        for(const key in iterationObj) {
            if(freuency[key] === freuency2[key]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
