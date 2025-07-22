// Maximum subarray

// https://leetcode.com/problems/maximum-subarray/
// medium
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Solution: Kadane's Algorithm
// O(n)
function maxSubarray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6

// Solution: prefix sum
// O(n^2)
function maxSubarray2(nums) {
  const n = nums.length;
  const prefix = new Array(n).fill(0);

  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subarraySum = i === 0 ? prefix[j] : prefix[j] - prefix[i - 1];
      maxSum = Math.max(maxSum, subarraySum);
    }
  }
  return maxSum;
}

console.log(maxSubarray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
