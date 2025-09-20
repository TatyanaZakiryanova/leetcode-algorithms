// Move zeroes

// https://leetcode.com/problems/move-zeroes/
// easy
// Move all 0's to the end of array while maintaining the relative order of the non-zero elements

// Solution: two pointers
function moveZeroes(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }
}

//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]
