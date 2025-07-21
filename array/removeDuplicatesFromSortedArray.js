// Remove duplicates from sorted array

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// easy
// Remove duplicates from sorted array in-place

// Solution: two pointers
// O(n)
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // Pointer to the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // If the element is unique, insert it at k position
      k++;
    }
  }
  return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5
