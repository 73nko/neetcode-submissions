class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let left = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[left] < prices[right]) {
                const currentProfit = prices[right] - prices[left];
                if (currentProfit > maxProfit) maxProfit = currentProfit;
            } else left = right;
        }
        return maxProfit;
    }
}
