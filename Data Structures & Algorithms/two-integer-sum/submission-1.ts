class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const needed: Map<number, number> = new Map();

        for (let i = 0; i <= nums.length; i++) {
            const n = nums[i] as number;
            const complement = target - n;

            if (needed.has(complement)) {
                return [needed.get(complement), i].sort();
            }

            needed.set(n, i);
        }

        return [0, 0];
    }
}
