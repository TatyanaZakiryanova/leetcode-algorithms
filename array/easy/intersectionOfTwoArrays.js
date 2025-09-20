// Intersection of two arrays

// https://leetcode.com/problems/intersection-of-two-arrays/
// easy

function intersection(nums1, nums2) {
  let set = new Set(nums1);
  let result = new Set();

  for (let n of nums2) {
    if (set.has(n)) {
      result.add(n);
    }
  }
  return [...result];
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[9, 4]
