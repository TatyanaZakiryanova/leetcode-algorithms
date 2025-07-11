// Reverse string

// https://leetcode.com/problems/reverse-string/
// easy
// Write a function that reverses a string

// Solution: two pointers
// O(n)
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
