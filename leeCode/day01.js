/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 第一次作答思路，使用双循环，每次拿到值后做对比
 * 凉在了[1] 这个数组上
 */

var removeDuplicates = function (nums) {
  let len = nums.length;
  let prev = undefined;
  let isEnd = 0;
  for (let i = 0; i < len; i++) {
    prev = nums[i];
    for (let j = i + 1; j < len; j++) {
      if (typeof nums[j] === 'number') {
        isEnd = i + 1;
        if (typeof prev !== 'number') {
          prev = nums[j];
          nums[i] = nums[j]
        }
      }
      if (nums[i] === nums[j]) {
        nums[j] = null
      };
    }
  }
  return isEnd
};

/**
 * 参考题解后，使用两个变量，一个变量存储位置，一个变量进行对比
 */
var removeDuplicates = function (nums) {
  let p1 = 0;
  const len = nums.length;
  for (let p2 = 0; p2 < len; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
  };
  return p1 + 1
};

/**
 * 对上述代码再次进行优化，使用短路运算再次进行优化
 */
var removeDuplicates = function (nums) {
  let p1 = 0;
  const len = nums.length;
  for (let p2 = 0; p2 < len; p2++) {
    nums[p1] !== nums[p2] && (nums[++p1] = nums[p2]);
  };
  return p1 + 1
};
/**
 * 最好成绩为：
 * 执行用时：80 ms
 * 内存消耗：40 MB
 */
