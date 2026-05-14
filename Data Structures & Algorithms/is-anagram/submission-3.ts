class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const counts = new Array(26).fill(0);

        const A = "a".charCodeAt(0);
        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - A]++;
            counts[t.charCodeAt(i) - A]--;
        }

        return counts.every((c) => c === 0);
    }
}
