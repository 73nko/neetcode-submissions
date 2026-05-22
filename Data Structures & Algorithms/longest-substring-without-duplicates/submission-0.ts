class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const lastSeenIndex = new Map<string, number>();

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            const previousIndex = lastSeenIndex.get(char);

            if (previousIndex !== undefined && previousIndex >= left) {
                left = previousIndex + 1;
            }

            lastSeenIndex.set(char, right);

            const currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
        }

        return maxLength;
    }
}
