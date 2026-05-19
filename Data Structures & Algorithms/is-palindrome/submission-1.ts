class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedS = s.replace(/\W/g, "").toLowerCase();
        let right = cleanedS.length - 1;

        for (const c of cleanedS) {
            if (c !== cleanedS[right]) return false;
            right--;
        }

        return true;
    }
}
