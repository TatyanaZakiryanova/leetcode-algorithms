// Find the index of the first occurence in a string

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// easy
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack

// Solution: sliding window
// O(n * m)
function strStr(haystack, needle) {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;

    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === needle.length) return i;
  }
  return -1;
}

console.log(strStr('sadbutsad', 'sad')); // 0
console.log(strStr('leetcode', 'leeto')); // -1
