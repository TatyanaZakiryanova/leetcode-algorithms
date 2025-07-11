// Ransom note

// https://leetcode.com/problems/ransom-note/
// easy
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Soluion: hashmap
// O(m + n)
function canConstruct(ransomNote, magazine) {
  const charMap = {};

  for (const char of magazine) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!charMap[char] || charMap[char] === 0) {
      return false;
    }
    charMap[char]--;
  }
  return true;
}

console.log(canConstruct('aa', 'ab')); //false
console.log(canConstruct('aa', 'aab')); //true
