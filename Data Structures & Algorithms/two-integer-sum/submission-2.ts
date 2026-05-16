class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();

        for (const [i, n] of nums.entries()) {
            const complement = target - n;

            if (seen.has(complement)) {
                return [seen.get(complement)!, i];
            }

            seen.set(n, i);
        }

        throw new Error("No solution found, contract violation");
    }
}
