// Anagram
// https://leetcode.com/problems/valid-anagram/
// easy
// Проверить, является ли строка t анаграммой строки s

// O(n)
function isAnagram(s, t) {
  const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  const getCharCount = (s) => {
    const charCount = {};
    for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  };

  const charCountS = getCharCount(normalize(s));
  const charCountT = getCharCount(normalize(t));

  if (Object.keys(charCountS).length !== Object.keys(charCountT).length) {
    return false;
  }

  for (const char in charCountS) {
    if (charCountS[char] !== charCountT[char]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram')); //true

// O(n log n)
function isAnagram2(s, t) {
  const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/gi, '');

  return normalize(s).split('').sort().join('') === normalize(t).split('').sort().join('');
}

console.log(isAnagram2('anagram', 'nagaram')); //true
