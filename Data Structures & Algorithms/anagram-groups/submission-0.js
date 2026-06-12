class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let word of strs) {
            const occurance = new Array(26).fill(0);
            const aUnicode = "a".charCodeAt(0);

            for(let i = 0; i < word.length; i++) {
                occurance[word.charCodeAt(i) - aUnicode]++;
            }

            const fingerprint = occurance.join("#");

            if(!map.has(fingerprint)) map.set(fingerprint, []);
            map.get(fingerprint).push(word);
        }

        return Array.from(map.values());
    }
}
