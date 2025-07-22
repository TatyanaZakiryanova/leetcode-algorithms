// Two sum

// https://leetcode.com/problems/two-sum/
// easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

// Solution: hashmap
// O(n)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const y = target - x;

    if (map.has(y)) {
      return [map.get(y), i];
    }
    map.set(x, i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
