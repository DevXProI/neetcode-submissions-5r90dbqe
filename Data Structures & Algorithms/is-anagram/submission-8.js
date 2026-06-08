class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charFromS = {};
        const charFromT = {};

        for(let i of s) {
            if(charFromS[i]) {
                charFromS[i] += 1;
            }
            else {
                charFromS[i] = 1;
            }
        }

        for(let i of t) {
            if(charFromT[i]) {
                charFromT[i] += 1;
            }
            else {
                charFromT[i] = 1;
            }
        }

        const iterateOver = Object.keys(charFromS).length > Object.keys(charFromT).length ? charFromS : charFromT;
        const checkIn = Object.keys(charFromS).length > Object.keys(charFromT).length ? charFromT: charFromS;

        for(let key in iterateOver) {
            if(iterateOver[key] !== checkIn[key]) {
                return false;
            }
        }

        return true;
    }
}
