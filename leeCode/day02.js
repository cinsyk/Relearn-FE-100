/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 作者：力扣 (LeetCode)
 * 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * 第二天价格比今天低的时候继续持有，第二天价格比今天高的时候卖出
 */
/**
* @param {number[]} prices
* @return {number}
*/
var maxProfit = function (prices) {
  let total = 0;
  prices.forEach((item, index) => {
    const next = prices[index + 1];
    let diff = next - item;
    // 只计算利润
    if (next && diff > 0) {
      total += diff;
    }
  })
  return total;
};

/**
 * 执行用时：80 ms
 * 内存消耗：39.4 MB
 */
