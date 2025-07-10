// First unique character in a string

// https://leetcode.com/problems/first-unique-character-in-a-string/
// easy
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1

// Solution: hashmap
// O(n)
function firstUniqChar(s) {
  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }

  return -1;
}

console.log(firstUniqChar('loveleetcode')); //2
console.log(firstUniqChar('aabb')); //-1
